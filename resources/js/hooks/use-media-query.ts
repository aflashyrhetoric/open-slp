import { useMediaQuery } from "@uidotdev/usehooks";

const useBreakpoint = () => {
    const isSmall = useMediaQuery("(min-width: 40rem)");
    const isMedium = useMediaQuery("(min-width: 48rem)");
    const isLarge = useMediaQuery("(min-width: 64rem)");
    const isXLarge = useMediaQuery("(min-width: 80rem)");
    const is2XLarge = useMediaQuery("(min-width: 96rem)");

    return {
        isSmall,
        isMedium,
        isLarge,
        isXLarge,
        is2XLarge,
    };
};

export default useBreakpoint;