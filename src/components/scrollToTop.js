/** 
 *  Title : Scroll To Top Event Components
 *  Date : 2021.10.14
 *  @honeypigman
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}