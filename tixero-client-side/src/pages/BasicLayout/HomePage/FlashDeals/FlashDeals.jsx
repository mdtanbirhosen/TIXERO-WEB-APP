import Title from "../../../../components/Title/Title";

const FlashDeals = () => {
    return (
        <div className="text-center">
            <Title title="Lightning Deals" subTitle={"Get your most value for money deals here."} />
            {/* slider here  */}
            <div className="grid grid-cols-3 gap-5">
                {
                    Array.from({ length: 3 }, (_, i) => (
                        <div className="card bg-base-100 w-full shadow-sm" key={i}>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FlashDeals;
