/** 
 *  Title : InfiniteScroll Components
 *  Date : 2021.10.08
 *  @honeypigman
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function InfiniteScroll({ method }) {
    const { pathname } = useLocation();

    useEffect(() => {
        let mounted = true;
        window.addEventListener("scroll", function () {

            console.log('====>' + mounted);
            if (mounted) {
                const limitMinScroll = 5;
                console.log('Now > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - limitMinScroll) {
                    console.log('More Scroll > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                    console.log('Called MovieList >');

                    // if ({ loadingList })
                    // getMain({ date: 2021, per_page: 10 });
                }
            };
        });
        return () => {
            mounted = false;
        }
    }, [pathname]);

    return null;
}