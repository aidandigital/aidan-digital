// NOTE: If the carousel is jumping to every other item, it is because React is in StrictMode.
// React StrictMode is disabled in production, so this component should work there.

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
            scrollX: 0,
            externalImageLoader: props.externalImageLoader,
        };

        this.scrollBox = createRef();
        this.marginMachine = createRef();
    }

    defaultImageWidth = 384; // 96 * 4
    defaultMarginX = 80; // 20 * 4

    componentDidMount() { // initial render
        this.scrollBox.current.addEventListener('wheel', this.restrictManualScroll, { passive: false }); // restrict scrolling

        this.scroll(); // start auto scrolling
    }
    
    componentDidUpdate() { // after each render
        this.scroll();
    }

    scroll() {
        this.shiftImages();
        setTimeout(() => this.changeImages(), this.state.speed);
    }

    shiftImages() {
        if (this.marginMachine.current) { // ensure marginMachine is still defined so we don't throw an error (such as if a user switches pages)
            this.marginMachine.current.style.transition = this.state.speed + "ms " + this.state.transition;
            this.marginMachine.current.style.marginLeft = "-" + this.computeTotalImageWidth(this.state.currentImages[0], true) + "px";
        }
    }

    changeImages = () => {
        const imagesLength = this.state.currentImages.length;
        if (this.marginMachine.current) {
            this.marginMachine.current.style.transition = "0s";
            this.marginMachine.current.style.marginLeft = 0;
        }
        this.setState({ currentImages: [...this.state.currentImages.slice(1, imagesLength), this.state.currentImages[0]] });
    }

    computeTotalImageWidth = (imageObj, includeMargin = false) => {
        return this.defaultImageWidth - (imageObj.shrinkWidthBy ? imageObj.shrinkWidthBy : 0) + (includeMargin ? this.defaultMarginX * 2 : 0);
    }

    restrictManualScroll(e) {
        if (e.deltaX !== 0) { // users can still scroll up/down
            e.preventDefault();
            e.stopPropagation();

            return false;
        }
    }

    render() {
        return (
            <div className="w-full overflow-x-scroll no-scrollbar h-60 duration-1000" ref={this.scrollBox}>
                <div className="w-max flex py-10 items-center">
                    <div className="inline-block" ref={this.marginMachine}></div>
                    {this.state.currentImages.map((image, i) => (
                        <div key={image.alt} className={"inline-block pop text-center"}
                        style={{
                            width: this.computeTotalImageWidth(image),
                            marginLeft: this.defaultMarginX, marginRight: this.defaultMarginX,
                        }}
                        >
                            <Link href={"/projects?technology=" + image.path}>
                                <Image loader={this.state.externalImageLoader} src={image.src} /* fix invalid src hostname error by using loader */ layout="responsive" width={this.computeTotalImageWidth(image)} style={{marginLeft: this.defaultMarginX, marginRight: this.defaultMarginX}} height={60 * 2} alt={image.alt} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default InfiniteCarousel;