import "@scss/pages/_adminIndustryManage.scss";

const AdminIndustryManage = () => {
    return (
        <article className="industry-manage">
            <h3>AMS Admin 업종관리</h3>
            <div className="content-area">
                <section className="content-table">
                    <header>업종</header>
                    <div className="content-list">
                        <img src="/icons/ic_192.png" alt="업종아이콘" />
                        <span>업종명 (FX)</span>
                        <section className="modify-btn-area">
                            <button>수정</button>
                        </section>
                    </div>
                    <footer>
                        <button>추가</button>
                    </footer>
                </section>
                <section className="content content-table">
                    <header>서비스</header>
                    <div className="content-list">
                        <span>등록된 데이터가 없습니다</span>
                    </div>
                    <footer>
                        <button>추가</button>
                    </footer>
                </section>
            </div>
        </article>
    );
};

export default AdminIndustryManage;
