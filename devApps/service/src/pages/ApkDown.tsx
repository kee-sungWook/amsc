import "@scss/pages/_apkDown.scss";
import { SlCloudDownload } from "react-icons/sl";

const ApkDown: React.FC = () => {
    return (
        <section className="apk-download">
            <SlCloudDownload className="icon" />
            <div className="title">Android 앱 다운로드</div>
            <div className="subtitle">안드로이드 앱을 다운로드하여 사용해보세요</div>
            <a href="/uploads/apk/app-release.apk" download="app-release.apk">
                Android 앱 다운로드
            </a>
        </section>
    );
};
export default ApkDown;
