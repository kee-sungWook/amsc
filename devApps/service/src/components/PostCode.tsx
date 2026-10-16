import type { AddrData } from "@interface/models";
import DaumPostcodeEmbed from "react-daum-postcode";
import { styled } from "styled-components";

const PostBackground = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.8);
`;
const PostContainer = styled.div`
   width: 95%;
   max-width: 500px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -60%);
`;
const CloseBtn = styled.div`
   img {
      filter: brightness(100);
   }
   &:hover {
      img {
         cursor: pointer;
         filter: invert(84%) sepia(75%) saturate(1674%) hue-rotate(174deg) brightness(103%) contrast(102%);
      }
   }
`;

export default function Postcode(props: any) {
    const handleComplete = (data: any) => {
        const addr = data.address;
        const sub = `${data.bname} ${data.buildingName}`.trim();
        const zoneCode = data.zonecode;
        const bCode = data.bcode;
        const addrData: AddrData = { addr, sub, zoneCode, bCode };
        props.handleAddr(addrData);
        props.handleComplete();
    };

    return (
        <PostBackground style={{ zIndex: "300" }}>
            <PostContainer>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                    <h2 style={{ color: "white" }}>주소찾기</h2>
                    <CloseBtn>
                        <img
                            src='/img/list_btn_close.png'
                            onClick={() => {
                                props.handleComplete();
                            }}
                        />
                    </CloseBtn>
                </div>
                <DaumPostcodeEmbed //
                    autoClose
                    style={{ width: "100%", height: "500px" }}
                    onComplete={handleComplete}
                />
            </PostContainer>
        </PostBackground>
    );
}