import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import {Fragment, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "@/hooks/redux-hook.ts";

const App = () => {
    const { i18n } = useTranslation();
    const language = useAppSelector(
        (state: { language: { value: string } }): string => state.language.value,
    );

    useEffect((): void => {
        localStorage.setItem("lang", language);
        i18n.changeLanguage(language).then(() => {});
    }, [language]);

    return <Fragment>
        <ReactQueryDevtools initialIsOpen={false}/>
        <TanStackRouterDevtools/>
    </Fragment>;
}

export default App;