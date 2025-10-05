import packageJson from '../../../../package.json';
import {ShineBorder} from "@/components/ui/shine-border.tsx";
import {createFormHook} from "@tanstack/react-form";
import {fieldContext, formContext} from "@/components/form";
import FieldInputText from "@/components/form/fields/field-input-text.tsx";
import FieldInputPassword from "@/components/form/fields/field-input-password.tsx";
import {z} from "zod";
import ButtonSubmit from "@/components/form/buttons/button-submit.tsx";
import {useState} from "react";
import {User as UserIcon} from "lucide-react";
import ChangeLanguage from "@/features/setting/language/change-language.component.tsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from "@tanstack/react-router";

const {useAppForm} = createFormHook({
    fieldComponents: {
        FieldInputText,
        FieldInputPassword
    },
    formComponents: {
        ButtonSubmit
    },
    fieldContext,
    formContext,
})

const Login = (props: {
    search: {
        redirect?: string
    }
}) => {
    const {t} = useTranslation('login');
    const [savedUsername, setSavedUsername] = useState(() => {
        return localStorage.getItem('savedUsername')?.trim() || ''
    });

    const navigate = useNavigate()

    const form = useAppForm({
        defaultValues: {
            username: savedUsername,
            password: '',
        },
        validators: {
            onSubmit: z.object({
                username: z.string(t('form.username.required')).nonempty(t('form.username.required')),
                password: z.string(t('form.password.required')).nonempty(t('form.password.required')),
            }),
        },
        onSubmit: () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    setSavedUsername(form.getFieldValue('username'))
                    localStorage.setItem('savedUsername', form.getFieldValue('username'))
                    localStorage.setItem('user', form.getFieldValue('username'))
                    navigate({
                        to: props.search.redirect || '/dashboard'
                    })
                    resolve()
                }, 1000)
            })
        },
    })

    return <div className={'w-screen h-screen flex flex-row p-6 gap-6'}>
        <div className={'h-full flex-1 hidden lg:block'}>
            <div className={'relative h-full rounded-4xl p-2'}>
                <ShineBorder shineColor={["#093ab6", "#9f16e4", "#cc1143"]} borderWidth={2}/>
                <div className={"bg-gray-200 w-full rounded-3xl h-full overflow-hidden"}>

                </div>
            </div>
        </div>
        <div className={'h-full w-full lg:w-[500px] flex flex-col justify-between'}>
            <div className={'flex flex-col gap-5'}>
                <div>
                    <h1 className={'text-xl font-bold'}>{t('welcome')}</h1>
                    <p className={'text-xs text-gray-500'}>{t('description')}</p>
                    <p className={'text-xs text-gray-500'}>{t('description2')}</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-full'}>
                    <form
                        className={'w-7/10'}
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                    >
                        {!savedUsername && <form.AppField
                            name="username"
                            children={(field) =>
                                <field.FieldInputText
                                    label={t('form.username.label')}
                                    placeholder={t('form.username.placeholder')}
                                    className={'mt-4'}
                                    isRequired
                                />}
                            validators={{
                                onChange: z.string(t('form.username.required')).nonempty(t('form.username.required'))
                            }}
                        />}
                        {savedUsername && <div className={'flex flex-col items-center mt-4 gap-2'}>
                            <div
                                className={'flex flex-col items-center justify-center w-14 h-14 rounded-full bg-gray-200 mx-auto'}>
                                <UserIcon size={32} strokeWidth={2}/>
                            </div>
                            <p className={'text-sm font-semibold text-gray-900'}>{savedUsername}</p>
                            <button
                                type={'button'}
                                className={'text-xs text-blue-500 hover:underline'}
                                onClick={() => {
                                    setSavedUsername('')
                                    localStorage.removeItem('savedUsername')
                                    form.setFieldValue('username', '')
                                }}
                            >
                                {t('form.changeUsername')}
                            </button>
                        </div>}
                        <form.AppField
                            name="password"
                            children={(field) =>
                                <field.FieldInputPassword
                                    label={t('form.password.label')}
                                    placeholder={t('form.password.placeholder')}
                                    className={'mt-4'}
                                    isRequired
                                />}
                            validators={{
                                onChange: z.string(t('form.password.required')).nonempty(t('form.password.required'))
                            }}
                        />
                        <form.AppForm>
                            <div className={'flex flex-col items-center'}>
                                <form.ButtonSubmit
                                    color={'primary'}
                                    className={'mt-4'}
                                >
                                    {t('form.login')}
                                </form.ButtonSubmit>
                            </div>
                        </form.AppForm>
                    </form>
                </div>
            </div>
            <div>
                <div className={'flex flex-col items-center justify-center mb-4'}>
                    <ChangeLanguage/>
                </div>
                <div className={'text-xs text-start text-gray-500 italic'}>
                    <p>{t('copyright')} © {new Date().getFullYear()} DTND
                        Inc. {t('allRightsReserved')} {t('version')} {packageJson.version}</p>
                    <a href={'https://dtnd.com.vn'} target={'_blank'} className={'hover:underline'}>
                        {t('address')}<br/>{t('address2')}
                    </a>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;