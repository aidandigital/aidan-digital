import { Component, createRef } from "react";
import Image from "next/image";
import Link from "next/link";

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0, // current slide index
            images: props.images,
            speed: props.speed || 2000,
            externalImageLoader: props.externalImageLoader,
            defaultImageWidth: props.defaultImageWidth || 384, // 96 * 4
            defaultMarginX: props.defaultMarginX || 80, // 20 * 4
            auto: props.auto || true,
        };

        this.currentImage = createRef();
    }

    back = (manual = true) => {
        if (manual) {
            this.setState({auto: false}); // turn off autoNext
        }

        if (this.state.i === 0) {
            this.setState({i: this.state.images.length - 1});
        } else {
            this.setState({i: this.state.i - 1});
        }
    }

    next = (manual = true) => {
        if (manual) {
            this.setState({auto: false}); // turn off autoNext
        }

        if (this.state.i + 1 === this.state.images.length) {
            this.changeImage(() => this.setState({i: 0}));
        } else {
            this.changeImage(() => this.setState({i: this.state.i + 1}));
        }
    }

    autoNext = () => {
        if (this.state.auto) {
            this.next(false);

            setTimeout(() => this.autoNext(), this.state.speed); // recursion
        }
    }

    changeImage = (action) => {
        this.currentImage.current.classList.add("image-down");
        setTimeout(() => {
            this.currentImage.current.classList.remove("image-down");
            this.currentImage.current.classList.add("image-up");
            action();
            setTimeout(() => {
                this.currentImage.current.classList.remove("image-up");
            }, 200); // length of 2nd animation
        }, 200); // length of 1st animation
    }

    computeTotalImageWidth = (imageObj, includeMargin = false) => {
        return this.state.defaultImageWidth - (imageObj.shrinkAspectBy ? imageObj.shrinkAspectBy : 0) + (includeMargin ? this.state.defaultMarginX * 2 : 0);
    }

    Back = () => (
        <span onClick={this.back} className="font-bold text-4xl hover:cursor-pointer hover:opacity-70 duration-200">{"<"}</span>
    )

    Next = () => (
        <span onClick={this.next} className="font-bold text-4xl hover:cursor-pointer hover:opacity-70 duration-200">{">"}</span>
    )

    componentDidMount() { // THIS GETS CALLED TWICE!!
        setTimeout(() => this.autoNext(), this.state.speed)
    }

    render() {
        return (
            <div className="justify-center flex items-center">
                <this.Back />
                <div className="w-1/2 text-center inline-block">
                    <div className="inline-block pop text-center relative" /* Position relative so that the image recognizes this as it's parent */
                    style={{
                        width: this.computeTotalImageWidth(this.state.images[this.state.i]), // we just want the width of the image, no margin included
                        height: 60 * 2,
                        marginLeft: this.state.defaultMarginX, marginRight: this.state.defaultMarginX,
                    }}
                    ref={this.currentImage}
                    >
                        <Link href={"/projects?tech=" + this.state.images[this.state.i].path}>
                            <Image
                            // Fix invalid src hostname error by using loader:
                            loader={this.state.externalImageLoader} src={this.state.images[this.state.i].src}
                            // Use original aspect ratio:
                            layout="fill" objectFit="contain"
                            // Alt:
                            alt={this.state.images[this.state.i].alt} />
                        </Link>
                    </div>
                </div>
                <this.Next />
                <div className="md:hidden text-center m-2">
                    <this.Back />
                    <this.Next />
                </div>
            </div>
        );
    }
};

export default ImageSlider;