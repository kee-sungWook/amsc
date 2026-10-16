import styled from "styled-components";
import { MoonLoader } from "react-spinners";
import { motion } from "motion/react";
const LoadingArea = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
   padding: 10% 0;
`;
const LoadingTxt = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const LoadingIndicator = ({ size = 80 }) => {
    return (
        <LoadingArea>
            <MoonLoader color='#119bff' cssOverride={{}} loading size={size} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1.0 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
            </motion.div>
            <LoadingTxt>Loading..</LoadingTxt>
        </LoadingArea>
    );
};

export default LoadingIndicator;
