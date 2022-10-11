// WARNING: This component only works on Safari.
// NOTE: If the carousel is jumping to every other item, it is because React is in StrictMode.
// React StrictMode is disabled in production, so this component should work there.

// This component works by setting the width of the image equal to a default width
// and then subtracting a number specified in a db (shrinkAspectBy). The height will
// then automatically scale down which is what we wanted since some images are naturally
// tall.

import Image from "next/image";
import Link from "next/link";
import { Component, createRef } from "react";

class InfiniteCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImages: props.images,
            speed: props.speed || 3500,
            transition: props.transition || "ease-in-out",
            externalImageLoader: props.externalImageLoader,
        };

        this.scrollBox = createRef();
        this.marginMachine = createRef();
    }

    defaultImageWidth = 384; // 96 * 4
    defaultMarginX = 80; // 20 * 4

    componentDidMount() { // initial render
        this.scrollBox.current.addEventListener('wheel', this.restrictManualScroll, { passive: false }); // attach scroll restricting function

        this.scroll(); // start auto scrolling
    }
    
    componentDidUpdate() { // after each render
        this.scroll();
    }

    scroll() {
        this.shiftImages();
        setTimeout(() => this.changeImages(), this.state.speed);
    }

    shiftImages() { // move images left by creating negative left margin
        if (this.marginMachine.current) { // ensure marginMachine is still defined so we don't throw an error (such as if a user switches pages)
            this.marginMachine.current.style.transition = this.state.speed + "ms " + this.state.transition;
            this.marginMachine.current.style.marginLeft = "-" + this.computeTotalImageWidth(this.state.currentImages[0], true) + "px"; // include margin since we need to move the entire image and the whitespace around it
        }
    }

    changeImages = () => {
        const imagesLength = this.state.currentImages.length;
        // reset the margin machine:
        if (this.marginMachine.current) {
            this.marginMachine.current.style.transition = "0ms " + this.state.transition;
            this.marginMachine.current.style.marginLeft = "0px";
        }
        // move first image to the back:
        this.setState({ currentImages: [...this.state.currentImages.slice(1, imagesLength), this.state.currentImages[0]] });
    }

    computeTotalImageWidth = (imageObj, includeMargin = false) => {
        return this.defaultImageWidth - (imageObj.shrinkAspectBy ? imageObj.shrinkAspectBy : 0) + (includeMargin ? this.defaultMarginX * 2 : 0);
    }

    restrictManualScroll(e) { // prevent manual scrolling left/right
        if (e.deltaX !== 0) { // users can still scroll up/down
            e.preventDefault();
            e.stopPropagation();

            return false;
        }
    }

    render() {
        return (
            <div className="w-full overflow-x-scroll no-scrollbar h-60" ref={this.scrollBox}>
                {/* ^ Removed duration-1000 from above, maybe that will help */}
                <div className="w-max flex py-10 items-center">
                    <div className="inline-block" ref={this.marginMachine}></div>
                    {this.state.currentImages.map((image, i) => (
                        <div key={image.alt} className={"inline-block pop text-center w-20 h-60 relative"} /* Position relative so that the image recognizes this as it's parent */
                        style={{
                            width: this.computeTotalImageWidth(image), // we just want the width of the image, no margin included
                            height: 60 * 2,
                            marginLeft: this.defaultMarginX, marginRight: this.defaultMarginX,
                        }}
                        >
                            <Link href={"/projects?tech=" + image.path}>
                                <Image 
                                // Fix invalid src hostname error by using loader:
                                loader={this.state.externalImageLoader} src={image.src}
                                // Use original aspect ratio:
                                layout="fill" objectFit="contain"
                                // Alt:
                                alt={image.alt} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default InfiniteCarousel;