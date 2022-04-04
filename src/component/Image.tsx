const Image = () => {
    return (
        <div className="image-container__item">
            <div className="image-area">
                <a href="javascript:;">
                    {/* <img :src="image.urls.thumb" :alt="image.alt_description" /> */}
                    <img  />
                </a>
            </div>
            <div>
                <ul className="image-info">
                    <li className="image-info__name">
                        <span className="name">이름 위치</span>
                    </li>
                    <li className="image-info__like">
                        <a href="javascript:;">
                            <i className="like"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Image;