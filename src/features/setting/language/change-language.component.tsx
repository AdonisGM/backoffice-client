import {Select, SelectedItems, SelectItem} from "@heroui/react";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "@/hooks/redux-hook.ts";
import {FlagComponent, US, VN} from 'country-flag-icons/react/1x1'
import {createElement} from "react";
import {change} from "@/redux/slices/languageSlice.ts";

const languages = [
    {label: 'language.en', value: 'en', icon: US},
    {label: 'language.vi', value: 'vi' , icon: VN},
];

const ChangeLanguage = () => {
    const {t} = useTranslation("setting");

    const language = useAppSelector((state) => state.language.value);
    const dispatch = useAppDispatch();

    return (
        <Select
            size={'sm'}
            className={'w-fit'}
            classNames={{
                trigger: 'rounded-full w-40',
            }}
            items={languages}
            onChange={(value) => {
                dispatch(change(value.target.value));
            }}
            selectedKeys={[language]}
            renderValue={(items: SelectedItems<{label: string; value: string; icon: FlagComponent}>) => {
                console.log(items);
                return items.map((item) => (
                    <div className="flex gap-2 items-center">
                        <div>
                            {item.data?.icon && createElement(item.data.icon, {className: 'w-4 h-4 rounded-full object-contain'})}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-small">{t(item.data!.label)}</span>
                        </div>
                    </div>
                ));
            }}
        >
            {(language) => (
                <SelectItem key={language.value} textValue={language.label}>
                    <div className="flex gap-2 items-center">
                        <div>
                            <language.icon className="w-5 h-5 rounded-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-small">{t(language.label)}</span>
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
};

export default ChangeLanguage;