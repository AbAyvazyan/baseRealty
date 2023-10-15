import {useCallback, useEffect, useState} from "react";

import './Register.css'
import {useNavigate} from "react-router";
import withAuthorization from "../../hoc/autorization";
import {community} from "../../helpers/constants";


// const community = ['Աջափնյակ', 'Արաբկիր', 'Ավան', 'Դավիթաշեն', 'Էրեբունի', 'Քանաքեռ Զեյթուն', 'Կենտրոն', 'Մալաթիա Սեբաստիա', 'Նոր Նորք', 'Շենգավիթ', 'Նորք Մարաշ', 'Նուբարաշեն', 'Արմավիր', 'Էջմիածին', 'Արգավանդ', 'Բաղրամյան', 'Մերձավան', 'Մեծամոր', 'Մրգաշատ', 'Մուսալեռ', 'Նալբանդյան', 'Փարաքար', 'Պտղունք', 'Թաիրով', 'Աղավնատուն', 'Ակնալիճ', 'Ակնաշեն', 'Ալաշկերտ', 'Ամասիա', 'Ամբերդ', 'Ապագա', 'Արագած', 'Արաքս', 'Առատաշեն', 'Արազափ', 'Արևադաշտ', 'Արևաշատ', 'Արևիկ', 'Արգինա', 'Արշալույս', 'Արտամետ', 'Արտաշար', 'Արտիմետ', 'Այգեկ', 'Այգեշատ', 'Բամբակաշատ', 'Դալարիկ', 'Դաշտ', 'Դողս', 'Ֆերիկ', 'Գայ', 'Գեղակերտ', 'Գետաշեն', 'Գրիբոյեդով', 'Հացիկ', 'Հայկաշեն', 'Հայկավան', 'Հայթաղ', 'Հովտամեջ', 'Ջանֆիդա', 'Ջրառատ', 'Ջրարբի', 'Ջրաշեն', 'Քարակերտ', 'Խանջյան', 'Խորոնք', 'Կողբավան', 'Լենուղի', 'Լուկաշին', 'Լուսագյուղ', 'Մարգարա', 'Մայիսյան', 'Մրգաստան', 'Մյասնիկյան', 'Նոր Արմավիր', 'Նոր Արտագերս', 'Նոր Կեսարիա', 'Նորակերտ', 'Նորապատ', 'Նորավան', 'Փշատավան', 'Սարդարապատ', 'Շահումյան', 'Շենավան', 'Շենիկ', 'Տանձուտ', 'Տարոնիկ', 'Ծաղկալանջ', 'Ծաղկունք', 'Ծիածան', 'Վանանդ', 'Վարդանաշեն', 'Ոսկեհատ', 'Եղեգնուտ', 'Երվանդաշատ', 'Զարթոնք', 'Արտաշատ', 'Աբովյան', 'Արարատ', 'Արբաթ', 'Այնթապ', 'Ազատաշեն', 'Դաշտավան', 'Գեղանիստ', 'Գետափնյա', 'Ղուկասավան', 'Հայանիստ', 'Հովտաշատ', 'Խաչփառ', 'Մարմարաշեն', 'Մասիս', 'Մխչյան', 'Նոր Խարբերդ', 'Նոր Կյուրին', 'Վեդի', 'Ոսկետափ', 'Արաքսավան', 'Արալեզ', 'Արևաբույր', 'Արևշատ', 'Արմաշ', 'Ավշար', 'Այգավան', 'Այգեպատ', 'Այգեստան', 'Այգեզարդ', 'Ազատավան', 'Բարձրաշեն', 'Բերդիկ', 'Բերքանուշ', 'Բուրաստան', 'Բյուրավան', 'Դալար', 'Դարակերտ', 'Դարբնիկ', 'Դաշտաքար', 'Դեղձուտ', 'Դիմիտրով', 'Դիտակ', 'Դվին', 'Գինեվետ', 'Գոռավան', 'Հնաբերդ', 'Հովտաշեն', 'Ջրահովիտ', 'Քաղցրաշեն', 'Կանաչուտ', 'Լանջառ', 'Լանջազատ', 'Լուսառատ', 'Լուսաշող', 'Մրգանուշ', 'Մրգավան', 'Մրգավետ', 'Նարեկ', 'Նիզամի', 'Նոր Կյանք', 'Նոր ուղի', 'Նորաբաց', 'Նորամարգ', 'Նորաշեն', 'Նոյակերտ', 'Նշավան', 'Պարույր Սևակ', 'Փոքր Վեդի', 'Ռանչպար', 'Սայաթ-Նովա', 'Սիփանիկ', 'Սիս', 'Սիսավան', 'Սուրենավան', 'Տափերական', 'Ուրցաձոր', 'Վանաշեն', 'Վարդաշատ', 'Վարդաշեն', 'Վերին Արտաշատ', 'Վերին Դվին', 'Ոստան', 'Եղեգնավան', 'Երասխ', 'Զանգակատուն', 'Զորակ', 'Աղվերան', 'Ակունք', 'Արագյուղ', 'Արամուս', 'Արգել', 'Առինջ', 'Արզական', 'Արզնի', 'Բալահովիտ', 'Բջնի', 'Բյուրեղավան', 'Չարենցավան', 'Ձորաղբյուր', 'Գառնի', 'Գեղաշեն', 'Գողթ', 'Հրազդան', 'Ջրվեժ', 'Կամարիս', 'Քանաքեռավան', 'Քասախ', 'Կոտայք', 'Մայակովսկի', 'Մրգաշեն', 'Նոր Արտամետ', 'Նոր Գեղի', 'Նոր Գյուղ', 'Նոր Հաճըն', 'Նուռնուս', 'Պռոշյան', 'Պտղնի', 'Սոլակ', 'Ծաղկաձոր', 'Վերին Պտղնի', 'Եղվարդ', 'Զովք', 'Զովունի', 'Աղավնաձոր', 'Ալափարս', 'Արտավազ', 'Բուժական', 'Ֆանտան', 'Գեղադիր', 'Գեղարդ', 'Գետամեջ', 'Գետարգել', 'Հանքավան', 'Հատիս', 'Հացավան', 'Ջրաբեր', 'Քաղսի', 'Կապուտան', 'Քարաշամբ', 'Կարենիս', 'Կաթնաղբյուր', 'Լեռնանիստ', 'Մարմարիկ', 'Մեղրաձոր', 'Նոր Երզնկա', 'Փյունիկ', 'Սարալանջ', 'Սևաբերդ', 'Թեղենիք', 'Ողջաբերդ', 'Զառ', 'Զորավան', 'Շիրակ', 'Գյումրի', 'Ախուրյան', 'Արթիկ', 'Աշոցք', 'Մարալիկ', 'Ախուրիկ', 'Ալվար', 'Անիպեմզա', 'Անուշավան', 'Առափի', 'Արեգնադեմ', 'Այգաբաց', 'Ազատան', 'Բագրավան', 'Բաշգյուղ', 'Բենիամին', 'Բյուրակն', 'Ձիթհանքով', 'Ձորակապ', 'Գետափ', 'Գետք', 'Ղարիբջանյան', 'Գտաշեն', 'Գուսանագյուղ', 'Հացիկավան', 'Հոռոմ', 'Հովունի', 'Ջաջուռ', 'Ջաջուռավան', 'Ջրափի', 'Կամո', 'Կապս', 'Կառնուտ', 'Քեթի', 'Կրասար', 'Կրաշեն', 'Լանջիկ', 'Լուսաղբյուր', 'Լուսակերտ', 'Մարմաշեն', 'Մեղրաշատ', 'Մեծ Մանթաշ', 'Մեծ Սեպասար', 'Նահապետավան', 'Փանիկ', 'Պեմզաշեն', 'Փոքր Մանթաշ', 'Փոքր Սեպասար', 'Սարակապ', 'Սառնաղբյուր', 'Շիրակավան', 'Սիզավետ', 'Սպանդարյան', 'Վահրամաբերդ', 'Ողջի', 'Ոսկեհասկ', 'Երազգավորս', 'Զույգաղբյուր', 'Լոռի', 'Վանաձոր', 'Ալավերդի', 'Դսեղ', 'Օձուն', 'Սպիտակ', 'Ստեփանավան', 'Տաշիր', 'Ագարակ', 'Ախթալա', 'Աքորի', 'Ամրակից', 'Արևաշող', 'Արևածագ', 'Արջուտ', 'Աթան', 'Այգեհատ', 'Ազնվաձոր', 'Բազում', 'Բովաձոր', 'Դարպաս', 'Դեբետ', 'Ձորագետ', 'Ձորագյուղ', 'Գարգառ', 'Ղուրսալի', 'Գոգարան', 'Գուգարք', 'Գյուլագարակ', 'Հաղպատ', 'Հարթագյուղ', 'Հոբարձի', 'Քարաձոր', 'Քարինջ', 'Կուրթան', 'Լեջան', 'Լերմոնտովո', 'Լեռնանցք', 'Լեռնապատ', 'Լոռի բերդ', 'Լորուտ', 'Մարգահովիտ', 'Մարց', 'Մեծ Այրում', 'Մեծ Պառնի', 'Մեծավան', 'Մղարթ', 'Միխայելովկա', 'Նեղոց', 'Նոր Խաչակապ', 'Փամբակ', 'Պրիվոլնոյե', 'Պուշկինո', 'Սարամեջ', 'Սարչապետ', 'Շամլուղ', 'Շիրակամուտ', 'Շնող', 'Ծաղկաշատ', 'Ծաթեր', 'Թումանյան', 'Ուռուտ', 'Վահագնաձոր', 'Վահագնի', 'Վարդաբլուր', 'Գեղարքունիք', 'Ճամբարակ', 'Գավառ', 'Մարտունի', 'Նորատուս', 'Սևան', 'Վարդենիս', 'Արեգունի', 'Արտանիշ', 'Արծվանիստ', 'Աստղաձոր', 'Բերդկունք', 'Չկալովկա', 'Դդմաշեն', 'Դրախտիկ', 'Գանձակ', 'Գեղամասար', 'Գեղամավան', 'Գեղհովիտ', 'Հայրավանք', 'Ջիլ', 'Կալավան', 'Կարճաղբյուր', 'Կարմիրգյուղ', 'Խաչաղբյուր', 'Լճափ', 'Լճաշեն', 'Լիճք', 'Մեծ Մասրիկ', 'Ներքին Գետաշեն', 'Փոքր Մասրիկ', 'Սարուխան', 'Շատջրեք', 'Շատվան', 'Շողակաթ', 'Տորֆավան', 'Ծաղկաշեն', 'Ծակքար', 'Ծափաթաղ', 'Ծովագյուղ', 'Ծովակ', 'Ծովասար', 'Ծովազարդ', 'Ծովինար', 'Վաղաշեն', 'Վանևան', 'Վարդենիկ', 'Վարսեր', 'Վերին Գետաշեն', 'Երանոս', 'Զոլաքար', 'Զովաբեր', 'Սյունիք', 'Գորիս', 'Կապան', 'Մեղրի', 'Սիսիան', 'Աղիտու', 'Ախլաթյան', 'Անգեղակոթ', 'Աշոտավան', 'Աճանան', 'Բարձրավան', 'Բռնակոթ', 'Դավիթ Բեկ', 'Հարժիս', 'Քաջարան', 'Քարահունջ', 'Կարճևան', 'Խնձորեսկ', 'Լեհվազ', 'Լեռնաձոր', 'Սառնակունք', 'Շաղատ', 'Շաքի', 'Շիկահող', 'Շինուհայր', 'Տանձավեր', 'Տաթև', 'Տեղ', 'Ծղուկ', 'Վերիշեն', 'Արագածոտն', 'Աղձք', 'Ապարան', 'Արագածավան', 'Արուճ', 'Աշտարակ', 'Բյուրական', 'Կարբի', 'Կոշ', 'Օհանավան', 'Օշական', 'Փարպի', 'Թալին', 'Ծաղկահովիտ', 'Ուջան', 'Ոսկեվազ', 'Ագարակավան', 'Անտառուտ', 'Արտաշավան', 'Արտենի', 'Աշնակ', 'Բազմաղբյուր', 'Դաշտադեմ', 'Դավթաշեն', 'Ղազարավան', 'Իրինդ', 'Կաքավաձոր', 'Լեռնարոտ', 'Մաստարա', 'Մելիքգյուղ', 'Մուղնի', 'Ներքին Բազմաբերդ', 'Ներքին Սասնաշեն', 'Նոր Ամանոս', 'Նոր Եդեսիա', 'Օրգով', 'Սաղմոսավան', 'Սասունիկ', 'Շամիրամ', 'Սուսեր', 'Թաթուլ', 'Տեղեր', 'Ցամաքասար', 'Ուշի', 'Վերին Սասնաշեն', 'Երնջատափ', 'Տավուշ', 'Բերդ', 'Դիլիջան', 'Իջևան', 'Նոյեմբերյան', 'Աչաջուր', 'Աճարկուտ', 'Աղավնավանք', 'Ակնաղբյուր', 'Արճիս', 'Արծվաբերդ', 'Այգեձոր', 'Այգեհովիտ', 'Այրում', 'Ազատամուտ', 'Բաղանիս', 'Բագրատաշեն', 'Բերդավան', 'Չինչին', 'Դեբետավան', 'Դեղձավան', 'Դիտավան', 'Գանձաքար', 'Գետահովիտ', 'Գոշ', 'Հաղարծին', 'Հաղթանակ', 'Հովք', 'Ջուջևան', 'Կայան', 'Խաչարձան', 'Խաշթառակ', 'Կիրանց', 'Կողբ', 'Լուսաձոր', 'Լուսահովիտ', 'Մովսես', 'Ներքին Կարմիրաղբյուր', 'Ներքին Ծաղկավան', 'Պառավաքար', 'Պտղավան', 'Սարիգյուղ', 'Սևքար', 'Թեղուտ', 'Վարագավան', 'Ոսկեվան', 'Ենոքավան', 'Զորական', 'Վայոց Ձոր', 'Ջերմուկ', 'Վայք', 'Եղեգնաձոր', 'Ագարակաձոր', 'Արենի', 'Արփի', 'Արտաբույնք', 'Արտավան', 'Ազատեկ', 'Չիվա', 'Գլաձոր', 'Գնդեվազ', 'Գողթանիկ', 'Հերմոն', 'Հորս', 'Մալիշկա', 'Ռինդ', 'Սերս', 'Շատին', 'Վերնաշեն', 'Եղեգիս', 'Զառիթափ', 'Զեդեա', 'Արցախ', 'Ստեփանակերտ', 'Ասկերան', 'Մարտակերտ',]

const region = ['Երևան', 'Արմավիր', 'Արարատ', 'Կոտայք', 'Շիրակ', 'Լոռի', 'Գեղարքունիք', 'Սյունիք', 'Արցախ']

const role = ['Super Admin', 'Broker Lead', 'Broker']

const Register = () => {

    const [username, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [theRole, setTheRole] = useState<string>(role[0])
    const [theCommunity, setTheCommunity] = useState<string>(community[0])
    const [theRegion, setTheRegion] = useState<string>(region[0])
    const navigate = useNavigate()


    const onEnterHandler = useCallback(async () => {
        if (!username.trim() || !password.trim() ||
            !lastName.trim() || !firstName.trim() ||
            !phone.trim() || !theRole.trim() || !theCommunity.trim() ||
            !theRegion.trim()) {

            return alert('error')
        }

        const token = JSON.parse(localStorage.getItem('userToken') as string)

        if (!token) {
            navigate('/login')
        }


        fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({
                "username": username.trim(),
                "password": password.trim(),
                "last_name": lastName.trim(),
                "first_name": firstName.trim(),
                "phone": phone.trim(),
                "role": theRole,
                "community": theCommunity,
                "region": theRegion
            })
        }).then(res => res.json()).then(response => {
            if (!response) {
                return
            }
            navigate('/admin-panel')
        })


    }, [username, password, lastName, firstName, phone, theRole, theCommunity, theRegion])

    return (
        <section style={{width: '100%', height: '82.7vh'}}>

            <div className={"go_back"} onClick={() => navigate("/admin-panel")}>
                Admin Panel
            </div>

            <form className={'register_form'} id={'register_form'} name={'register_form'}>
                <h2>Register</h2>

                <input id={'username'}
                       type="username"
                       value={username}
                       onChange={(e) => setUserName(e.target.value)}
                       placeholder={'username'} required/>

                <input id={'password'}
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={'password'} required/>

                <input id={'last_name'}
                       type="last_name"
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                       placeholder={'Surname'} required/>

                <input id={'first_name'}
                       type="first_name"
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                       placeholder={'Name'} required/>

                <input id={'phone'}
                       type="phone"
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       placeholder={'Phone'}
                       required/>

                <select
                    name="role"
                    id="role"
                    value={theRole}
                    onChange={(e) => setTheRole(e.target.value)} required
                >
                    {role.map((singleRole: string, index: number) => {
                        return <option value={singleRole} key={index}>{singleRole}</option>
                    })}
                </select>

                <select
                    name="community"
                    id="community"
                    value={theCommunity}
                    onChange={(e) => setTheCommunity(e.target.value)}
                    required
                >
                    {community.map((singleCommunity: string, index: number) => {
                        return <option value={singleCommunity} key={index}>{singleCommunity}</option>
                    })}
                </select>

                <select
                    name="region"
                    id="region"
                    value={theRegion}
                    onChange={(e) => setTheRegion(e.target.value)}
                    required
                >
                    {region.map((singleRegion: string, index: number) => {
                        return <option value={singleRegion} key={index}>{singleRegion}</option>
                    })}
                </select>

                <div onClick={onEnterHandler}>Enter</div>
            </form>
        </section>
    )
}


export default withAuthorization(Register)