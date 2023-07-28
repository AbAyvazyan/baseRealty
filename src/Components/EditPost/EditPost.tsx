import "../HousePosting/HousePosting.css";
import "./EditPost.css";
import MapComponent from "../HouseMap/HouseMap";
import withAuthorization from "../../hoc/autorization";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const region = [
  "Երևան",
  "Արմավիր",
  "Արարատ",
  "Կոտայք",
  "Շիրակ",
  "Լոռի",
  "Գեղարքունիք",
  "Սյունիք",
  "Արցախ",
];
const community = [
  "Աջափնյակ",
  "Արաբկիր",
  "Ավան",
  "Դավիթաշեն",
  "Էրեբունի",
  "Քանաքեռ Զեյթուն",
  "Կենտրոն",
  "Մալաթիա Սեբաստիա",
  "Նոր Նորք",
  "Շենգավիթ",
  "Նորք Մարաշ",
  "Նուբարաշեն",
  "Արմավիր",
  "Էջմիածին",
  "Արգավանդ",
  "Բաղրամյան",
  "Մերձավան",
  "Մեծամոր",
  "Մրգաշատ",
  "Մուսալեռ",
  "Նալբանդյան",
  "Փարաքար",
  "Պտղունք",
  "Թաիրով",
  "Աղավնատուն",
  "Ակնալիճ",
  "Ակնաշեն",
  "Ալաշկերտ",
  "Ամասիա",
  "Ամբերդ",
  "Ապագա",
  "Արագած",
  "Արաքս",
  "Առատաշեն",
  "Արազափ",
  "Արևադաշտ",
  "Արևաշատ",
  "Արևիկ",
  "Արգինա",
  "Արշալույս",
  "Արտամետ",
  "Արտաշար",
  "Արտիմետ",
  "Այգեկ",
  "Այգեշատ",
  "Բամբակաշատ",
  "Դալարիկ",
  "Դաշտ",
  "Դողս",
  "Ֆերիկ",
  "Գայ",
  "Գեղակերտ",
  "Գետաշեն",
  "Գրիբոյեդով",
  "Հացիկ",
  "Հայկաշեն",
  "Հայկավան",
  "Հայթաղ",
  "Հովտամեջ",
  "Ջանֆիդա",
  "Ջրառատ",
  "Ջրարբի",
  "Ջրաշեն",
  "Քարակերտ",
  "Խանջյան",
  "Խորոնք",
  "Կողբավան",
  "Լենուղի",
  "Լուկաշին",
  "Լուսագյուղ",
  "Մարգարա",
  "Մայիսյան",
  "Մրգաստան",
  "Մյասնիկյան",
  "Նոր Արմավիր",
  "Նոր Արտագերս",
  "Նոր Կեսարիա",
  "Նորակերտ",
  "Նորապատ",
  "Նորավան",
  "Փշատավան",
  "Սարդարապատ",
  "Շահումյան",
  "Շենավան",
  "Շենիկ",
  "Տանձուտ",
  "Տարոնիկ",
  "Ծաղկալանջ",
  "Ծաղկունք",
  "Ծիածան",
  "Վանանդ",
  "Վարդանաշեն",
  "Ոսկեհատ",
  "Եղեգնուտ",
  "Երվանդաշատ",
  "Զարթոնք",
  "Արտաշատ",
  "Աբովյան",
  "Արարատ",
  "Արբաթ",
  "Այնթապ",
  "Ազատաշեն",
  "Դաշտավան",
  "Գեղանիստ",
  "Գետափնյա",
  "Ղուկասավան",
  "Հայանիստ",
  "Հովտաշատ",
  "Խաչփառ",
  "Մարմարաշեն",
  "Մասիս",
  "Մխչյան",
  "Նոր Խարբերդ",
  "Նոր Կյուրին",
  "Վեդի",
  "Ոսկետափ",
  "Արաքսավան",
  "Արալեզ",
  "Արևաբույր",
  "Արևշատ",
  "Արմաշ",
  "Ավշար",
  "Այգավան",
  "Այգեպատ",
  "Այգեստան",
  "Այգեզարդ",
  "Ազատավան",
  "Բարձրաշեն",
  "Բերդիկ",
  "Բերքանուշ",
  "Բուրաստան",
  "Բյուրավան",
  "Դալար",
  "Դարակերտ",
  "Դարբնիկ",
  "Դաշտաքար",
  "Դեղձուտ",
  "Դիմիտրով",
  "Դիտակ",
  "Դվին",
  "Գինեվետ",
  "Գոռավան",
  "Հնաբերդ",
  "Հովտաշեն",
  "Ջրահովիտ",
  "Քաղցրաշեն",
  "Կանաչուտ",
  "Լանջառ",
  "Լանջազատ",
  "Լուսառատ",
  "Լուսաշող",
  "Մրգանուշ",
  "Մրգավան",
  "Մրգավետ",
  "Նարեկ",
  "Նիզամի",
  "Նոր Կյանք",
  "Նոր ուղի",
  "Նորաբաց",
  "Նորամարգ",
  "Նորաշեն",
  "Նոյակերտ",
  "Նշավան",
  "Պարույր Սևակ",
  "Փոքր Վեդի",
  "Ռանչպար",
  "Սայաթ-Նովա",
  "Սիփանիկ",
  "Սիս",
  "Սիսավան",
  "Սուրենավան",
  "Տափերական",
  "Ուրցաձոր",
  "Վանաշեն",
  "Վարդաշատ",
  "Վարդաշեն",
  "Վերին Արտաշատ",
  "Վերին Դվին",
  "Ոստան",
  "Եղեգնավան",
  "Երասխ",
  "Զանգակատուն",
  "Զորակ",
  "Աղվերան",
  "Ակունք",
  "Արագյուղ",
  "Արամուս",
  "Արգել",
  "Առինջ",
  "Արզական",
  "Արզնի",
  "Բալահովիտ",
  "Բջնի",
  "Բյուրեղավան",
  "Չարենցավան",
  "Ձորաղբյուր",
  "Գառնի",
  "Գեղաշեն",
  "Գողթ",
  "Հրազդան",
  "Ջրվեժ",
  "Կամարիս",
  "Քանաքեռավան",
  "Քասախ",
  "Կոտայք",
  "Մայակովսկի",
  "Մրգաշեն",
  "Նոր Արտամետ",
  "Նոր Գեղի",
  "Նոր Գյուղ",
  "Նոր Հաճըն",
  "Նուռնուս",
  "Պռոշյան",
  "Պտղնի",
  "Սոլակ",
  "Ծաղկաձոր",
  "Վերին Պտղնի",
  "Եղվարդ",
  "Զովք",
  "Զովունի",
  "Աղավնաձոր",
  "Ալափարս",
  "Արտավազ",
  "Բուժական",
  "Ֆանտան",
  "Գեղադիր",
  "Գեղարդ",
  "Գետամեջ",
  "Գետարգել",
  "Հանքավան",
  "Հատիս",
  "Հացավան",
  "Ջրաբեր",
  "Քաղսի",
  "Կապուտան",
  "Քարաշամբ",
  "Կարենիս",
  "Կաթնաղբյուր",
  "Լեռնանիստ",
  "Մարմարիկ",
  "Մեղրաձոր",
  "Նոր Երզնկա",
  "Փյունիկ",
  "Սարալանջ",
  "Սևաբերդ",
  "Թեղենիք",
  "Ողջաբերդ",
  "Զառ",
  "Զորավան",
  "Շիրակ",
  "Գյումրի",
  "Ախուրյան",
  "Արթիկ",
  "Աշոցք",
  "Մարալիկ",
  "Ախուրիկ",
  "Ալվար",
  "Անիպեմզա",
  "Անուշավան",
  "Առափի",
  "Արեգնադեմ",
  "Այգաբաց",
  "Ազատան",
  "Բագրավան",
  "Բաշգյուղ",
  "Բենիամին",
  "Բյուրակն",
  "Ձիթհանքով",
  "Ձորակապ",
  "Գետափ",
  "Գետք",
  "Ղարիբջանյան",
  "Գտաշեն",
  "Գուսանագյուղ",
  "Հացիկավան",
  "Հոռոմ",
  "Հովունի",
  "Ջաջուռ",
  "Ջաջուռավան",
  "Ջրափի",
  "Կամո",
  "Կապս",
  "Կառնուտ",
  "Քեթի",
  "Կրասար",
  "Կրաշեն",
  "Լանջիկ",
  "Լուսաղբյուր",
  "Լուսակերտ",
  "Մարմաշեն",
  "Մեղրաշատ",
  "Մեծ Մանթաշ",
  "Մեծ Սեպասար",
  "Նահապետավան",
  "Փանիկ",
  "Պեմզաշեն",
  "Փոքր Մանթաշ",
  "Փոքր Սեպասար",
  "Սարակապ",
  "Սառնաղբյուր",
  "Շիրակավան",
  "Սիզավետ",
  "Սպանդարյան",
  "Վահրամաբերդ",
  "Ողջի",
  "Ոսկեհասկ",
  "Երազգավորս",
  "Զույգաղբյուր",
  "Լոռի",
  "Վանաձոր",
  "Ալավերդի",
  "Դսեղ",
  "Օձուն",
  "Սպիտակ",
  "Ստեփանավան",
  "Տաշիր",
  "Ագարակ",
  "Ախթալա",
  "Աքորի",
  "Ամրակից",
  "Արևաշող",
  "Արևածագ",
  "Արջուտ",
  "Աթան",
  "Այգեհատ",
  "Ազնվաձոր",
  "Բազում",
  "Բովաձոր",
  "Դարպաս",
  "Դեբետ",
  "Ձորագետ",
  "Ձորագյուղ",
  "Գարգառ",
  "Ղուրսալի",
  "Գոգարան",
  "Գուգարք",
  "Գյուլագարակ",
  "Հաղպատ",
  "Հարթագյուղ",
  "Հոբարձի",
  "Քարաձոր",
  "Քարինջ",
  "Կուրթան",
  "Լեջան",
  "Լերմոնտովո",
  "Լեռնանցք",
  "Լեռնապատ",
  "Լոռի բերդ",
  "Լորուտ",
  "Մարգահովիտ",
  "Մարց",
  "Մեծ Այրում",
  "Մեծ Պառնի",
  "Մեծավան",
  "Մղարթ",
  "Միխայելովկա",
  "Նեղոց",
  "Նոր Խաչակապ",
  "Փամբակ",
  "Պրիվոլնոյե",
  "Պուշկինո",
  "Սարամեջ",
  "Սարչապետ",
  "Շամլուղ",
  "Շիրակամուտ",
  "Շնող",
  "Ծաղկաշատ",
  "Ծաթեր",
  "Թումանյան",
  "Ուռուտ",
  "Վահագնաձոր",
  "Վահագնի",
  "Վարդաբլուր",
  "Գեղարքունիք",
  "Ճամբարակ",
  "Գավառ",
  "Մարտունի",
  "Նորատուս",
  "Սևան",
  "Վարդենիս",
  "Արեգունի",
  "Արտանիշ",
  "Արծվանիստ",
  "Աստղաձոր",
  "Բերդկունք",
  "Չկալովկա",
  "Դդմաշեն",
  "Դրախտիկ",
  "Գանձակ",
  "Գեղամասար",
  "Գեղամավան",
  "Գեղհովիտ",
  "Հայրավանք",
  "Ջիլ",
  "Կալավան",
  "Կարճաղբյուր",
  "Կարմիրգյուղ",
  "Խաչաղբյուր",
  "Լճափ",
  "Լճաշեն",
  "Լիճք",
  "Մեծ Մասրիկ",
  "Ներքին Գետաշեն",
  "Փոքր Մասրիկ",
  "Սարուխան",
  "Շատջրեք",
  "Շատվան",
  "Շողակաթ",
  "Տորֆավան",
  "Ծաղկաշեն",
  "Ծակքար",
  "Ծափաթաղ",
  "Ծովագյուղ",
  "Ծովակ",
  "Ծովասար",
  "Ծովազարդ",
  "Ծովինար",
  "Վաղաշեն",
  "Վանևան",
  "Վարդենիկ",
  "Վարսեր",
  "Վերին Գետաշեն",
  "Երանոս",
  "Զոլաքար",
  "Զովաբեր",
  "Սյունիք",
  "Գորիս",
  "Կապան",
  "Մեղրի",
  "Սիսիան",
  "Աղիտու",
  "Ախլաթյան",
  "Անգեղակոթ",
  "Աշոտավան",
  "Աճանան",
  "Բարձրավան",
  "Բռնակոթ",
  "Դավիթ Բեկ",
  "Հարժիս",
  "Քաջարան",
  "Քարահունջ",
  "Կարճևան",
  "Խնձորեսկ",
  "Լեհվազ",
  "Լեռնաձոր",
  "Սառնակունք",
  "Շաղատ",
  "Շաքի",
  "Շիկահող",
  "Շինուհայր",
  "Տանձավեր",
  "Տաթև",
  "Տեղ",
  "Ծղուկ",
  "Վերիշեն",
  "Արագածոտն",
  "Աղձք",
  "Ապարան",
  "Արագածավան",
  "Արուճ",
  "Աշտարակ",
  "Բյուրական",
  "Կարբի",
  "Կոշ",
  "Օհանավան",
  "Օշական",
  "Փարպի",
  "Թալին",
  "Ծաղկահովիտ",
  "Ուջան",
  "Ոսկեվազ",
  "Ագարակավան",
  "Անտառուտ",
  "Արտաշավան",
  "Արտենի",
  "Աշնակ",
  "Բազմաղբյուր",
  "Դաշտադեմ",
  "Դավթաշեն",
  "Ղազարավան",
  "Իրինդ",
  "Կաքավաձոր",
  "Լեռնարոտ",
  "Մաստարա",
  "Մելիքգյուղ",
  "Մուղնի",
  "Ներքին Բազմաբերդ",
  "Ներքին Սասնաշեն",
  "Նոր Ամանոս",
  "Նոր Եդեսիա",
  "Օրգով",
  "Սաղմոսավան",
  "Սասունիկ",
  "Շամիրամ",
  "Սուսեր",
  "Թաթուլ",
  "Տեղեր",
  "Ցամաքասար",
  "Ուշի",
  "Վերին Սասնաշեն",
  "Երնջատափ",
  "Տավուշ",
  "Բերդ",
  "Դիլիջան",
  "Իջևան",
  "Նոյեմբերյան",
  "Աչաջուր",
  "Աճարկուտ",
  "Աղավնավանք",
  "Ակնաղբյուր",
  "Արճիս",
  "Արծվաբերդ",
  "Այգեձոր",
  "Այգեհովիտ",
  "Այրում",
  "Ազատամուտ",
  "Բաղանիս",
  "Բագրատաշեն",
  "Բերդավան",
  "Չինչին",
  "Դեբետավան",
  "Դեղձավան",
  "Դիտավան",
  "Գանձաքար",
  "Գետահովիտ",
  "Գոշ",
  "Հաղարծին",
  "Հաղթանակ",
  "Հովք",
  "Ջուջևան",
  "Կայան",
  "Խաչարձան",
  "Խաշթառակ",
  "Կիրանց",
  "Կողբ",
  "Լուսաձոր",
  "Լուսահովիտ",
  "Մովսես",
  "Ներքին Կարմիրաղբյուր",
  "Ներքին Ծաղկավան",
  "Պառավաքար",
  "Պտղավան",
  "Սարիգյուղ",
  "Սևքար",
  "Թեղուտ",
  "Վարագավան",
  "Ոսկեվան",
  "Ենոքավան",
  "Զորական",
  "Վայոց Ձոր",
  "Ջերմուկ",
  "Վայք",
  "Եղեգնաձոր",
  "Ագարակաձոր",
  "Արենի",
  "Արփի",
  "Արտաբույնք",
  "Արտավան",
  "Ազատեկ",
  "Չիվա",
  "Գլաձոր",
  "Գնդեվազ",
  "Գողթանիկ",
  "Հերմոն",
  "Հորս",
  "Մալիշկա",
  "Ռինդ",
  "Սերս",
  "Շատին",
  "Վերնաշեն",
  "Եղեգիս",
  "Զառիթափ",
  "Զեդեա",
  "Արցախ",
  "Ստեփանակերտ",
  "Ասկերան",
  "Մարտակերտ",
];
const roomHeiht = [
  {
    id: 1,
    title: 2.45,
  },
  {
    id: 2,
    title: 2.55,
  },
  {
    id: 3,
    title: 2.75,
  },
  {
    id: 4,
    title: 3,
  },
  {
    id: 5,
    title: 3.2,
  },
];
const renovation = [
  {
    id: 1,
    title: "հին վերանորոգում",
  },
  {
    id: 2,
    title: "զրոական",
  },
  {
    id: 3,
    title: "վերանորոգում 10 ավել",
  },
  {
    id: 4,
    title: "վերանորոգում 5-10",
  },
  {
    id: 5,
    title: "վերանորոգում 2-5",
  },
  {
    id: 6,
    title: "վերանորոգված 2 տարի",
  },
  {
    id: 7,
    title: "վերանորոգված չբնակեցված",
  },
  {
    id: 8,
    title: "վերանորոգված դիզաիներական ոճով",
  },
];
const buildingType = [
  {
    id: 1,
    title: "Ստալինկա",
  },
  {
    id: 2,
    title: "Քարե",
  },
  {
    id: 3,
    title: "Պոստ Խրյուշովկա",
  },
  {
    id: 4,
    title: "Բարձրահարկ",
  },
  {
    id: 5,
    title: "Խոշոր Պանելային",
  },
  {
    id: 6,
    title: "Կասետաին",
  },
  {
    id: 7,
    title: "Նորակառույց",
  },
  {
    id: 8,
    title: "Նորակառույց Կառուցապատողից",
  },
  {
    id: 9,
    title: "Այլ",
  },
];
const meaning = [
  "Գրասենյակաին",
  "Առևտրաին",
  "Արտադրական",
  "Պահեստաին",
  "Ռեստորան",
  "Հյուրանոց",
  "Ավտոսպասարկում",
  "Բազմաֆունկցիոնալ",
];

const imageGettingHandler = (
  event: any,
  setFileArray: any,
  setLocalArray: any
) => {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64Data = e.target.result; // Base64 data

      setLocalArray((prevArray: any) => [...prevArray, base64Data]);

      const newFile = new File([file], file.name, { type: file.type });
      setFileArray((prevArray: any) => [...prevArray, newFile]);
    };

    reader.readAsDataURL(file);
  }
  event.target.value = "";
};

const statementCheckedHandler = (setStateAction: any, id: number) => {
  setStateAction((prevState: any) => {
    return prevState.map((item: any) => {
      return item.id === id
        ? { ...item, checked: true }
        : { ...item, checked: false };
    });
  });
};

const setComunalChecks = (setStateAction: any, id: number) => {
  setStateAction((prevState: any) => {
    return prevState.map((item: any) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
  });
};

const deleteFromImageListHandler = (
  index: number,
  setLocalArray: any,
  setImageArray: any
) => {
  setLocalArray((prevArray: any) => {
    const newArray = [...prevArray];
    newArray.splice(index, 1);
    return newArray;
  });

  setImageArray((prevArray: any) => {
    const newArray = [...prevArray];
    newArray.splice(index, 1);
    return newArray;
  });
};

type TEditHouse = {
  houseInfo: any;
};

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const today = `${year}-${month}-${day}`;

const EditPost: FC<TEditHouse> = ({ houseInfo }) => {
  console.log(houseInfo);
  const [responseState, setResponseState] = useState<any>({});
  const [thisTimeType, setThisTimeType] = useState("");
  const [description, setDescription] = useState([
    {
      id: 1,
      title: "Վաճառք",
      checked: true,
    },
    {
      id: 2,
      title: "Վարձ",
      checked: false,
    },
    {
      id: 3,
      title: "Օրավարձ",
      checked: false,
    },
  ]);
  const [propertyType, setPropertyType] = useState([
    {
      id: 1,
      title: "Բնակարան",
      checked: true,
    },
    {
      id: 2,
      title: "Առանձնատուն",
      checked: false,
    },
    {
      id: 3,
      title: "Կոմերցիոն",
      checked: false,
    },
    {
      id: 4,
      title: "Հողատարածք",
      checked: false,
    },
    {
      id: 5,
      title: "Հոսթել",
      checked: false,
    },
    {
      id: 6,
      title: "Հյուրատուն",
      checked: false,
    },
    {
      id: 7,
      title: "Հյուրանոց",
      checked: false,
    },
  ]);
  const [status, setStatus] = useState([
    {
      id: 1,
      title: "Ակտիվ",
      checked: true,
    },
    {
      id: 2,
      title: "Ժամանակավոր դադար",
      checked: false,
    },
    {
      id: 3,
      title: "Վաճառված",
      checked: false,
    },
    {
      id: 4,
      title: "Չանրադառնալ",
      checked: false,
    },
  ]);
  const [address, setAddress] = useState(houseInfo.address);
  const [name, setName] = useState(houseInfo.contacts[0].name);
  const [number, setNumber] = useState(houseInfo.contacts[0].phone);
  const [mail, setMail] = useState(houseInfo.contacts[0].email);
  const [thisTimeDescription, setThisTimeDescription] = useState(
    houseInfo.property_description
  );
  const [thisTimeStatus, setThisTimeStatus] = useState(houseInfo.property_type);
  //check this later
  const [apartment, setApartment] = useState("");
  const [homeDescription, setHomeDescription] = useState(houseInfo.description);
  const [detailedHomeDescription, setDetailedHomeDescription] = useState(
    houseInfo.additional_info
  );
  const [mapAddress, setMapAddress] = useState("");
  const [price, setPrice] = useState(houseInfo.price);
  const [allSqare, setAllSqare] = useState(houseInfo.total_area);
  const [landLayn, setLandLayn] = useState(houseInfo.ground_width);
  const [landSquare, setLandSquare] = useState(houseInfo.ground_area);
  const [landErk, setLandErk] = useState(houseInfo.ground_height);
  const [rooms, setRooms] = useState(houseInfo.room);
  const [floor, setFloor] = useState(houseInfo.floors_number);
  const [hallSquare, setHallSquare] = useState(houseInfo.hall_area);
  const [storageLength, setStorageLength] = useState(houseInfo.storage_area);
  const [vitrage, setVitrage] = useState(houseInfo.vitrage);
  const [floornes, setFloornes] = useState(houseInfo.building_floors_number);
  const [sanuzel, setSanuzel] = useState(houseInfo.bathroom_count);
  const [comunal, setComunal] = useState([
    {
      id: 1,
      title: "Գազ",
      checked: false,
    },
    {
      id: 2,
      title: "էլեկտրոէներգիա",
      checked: false,
    },
    {
      id: 3,
      title: "Ջուր",
      checked: false,
    },
    {
      id: 4,
      title: "Համացանց",
      checked: false,
    },
    {
      id: 5,
      title: "Ջեռուցման համակարգ",
      checked: false,
    },
    {
      id: 6,
      title: "Օդորակիչ",
      checked: false,
    },
  ]);
  const [convinions, setConvinions] = useState([
    {
      id: 1,
      title: "Արևկողմ",
      checked: false,
    },
    {
      id: 2,
      title: "Ավտոկայանատեղի",
      checked: false,
    },
    {
      id: 3,
      title: "Անվտանգություն",
      checked: false,
    },
    {
      id: 4,
      title: "Բուխարրի",
      checked: false,
    },
    {
      id: 5,
      title: "Բաց պատշգամբ",
      checked: false,
    },
    {
      id: 6,
      title: "Լոջա",
      checked: false,
    },
    {
      id: 7,
      title: "Վերելակ",
      checked: false,
    },
    {
      id: 8,
      title: "Նկուղ",
      checked: false,
    },
    {
      id: 9,
      title: "Ձեղնահարկ",
      checked: false,
    },
    {
      id: 10,
      title: "Խորդանոց",
      checked: false,
    },
    {
      id: 11,
      title: "Բարձր առաջին հարկ",
      checked: false,
    },
    {
      id: 12,
      title: "Տաքացվող հատակ",
      checked: false,
    },
    {
      id: 13,
      title: "Գեղեցիկ տեսարան",
      checked: false,
    },
    {
      id: 14,
      title: "Կանգառի մոտ",
      checked: false,
    },
    {
      id: 15,
      title: "Մետրո",
      checked: false,
    },
    {
      id: 16,
      title: "Ճանապարհամերձ",
      checked: false,
    },
    {
      id: 17,
      title: "Զբոսայգի",
      checked: false,
    },
    {
      id: 18,
      title: "Պարսպապատ",
      checked: false,
    },
    {
      id: 19,
      title: "Շոգեբաղնիք",
      checked: false,
    },
    {
      id: 20,
      title: "Կահույք",
      checked: false,
    },
    {
      id: 21,
      title: "Տեխնիկա",
      checked: false,
    },
    {
      id: 22,
      title: "Խոհանոցաին Կահույք",
      checked: false,
    },
  ]);
  const [renovationState, setRenovationState] = useState(houseInfo.state);
  const [roomHeightState, setRoomHeightState] = useState(
    houseInfo.celing_hegiht
  );
  const [regionState, setRegionState] = useState(houseInfo.region);
  const [communityState, setCommunityState] = useState(houseInfo.community);
  const [buildingTypeState, setBuildingTypeState] = useState(
    houseInfo.building_type
  );
  const [code, setCode] = useState(houseInfo.cod);
  const [date, setDate] = useState<any>(houseInfo.day_of_relase);
  const [reqObj, setReqObj] = useState<any>({});
  const [activeComunal, setActiveComunal] = useState<any>([]);
  const [activeConvinions, setActiveConvinions] = useState<any>([]);
  const [ourImages, setOurImages] = useState<any[]>([]);
  const [localOurImages, setLocalOurImages] = useState<any[]>([]);
  const [allImages, setAllImages] = useState<any[]>([]);
  const [localAllImages, setLocalAllImages] = useState<any[]>([]);
  const [vkayakanImages, setVkayakanImages] = useState<any[]>([]);
  const [localVkayakanImages, setLocalVkayakanImages] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    houseInfo.comunal.forEach((houseComunal: string) => {
      const updatedComunal = comunal.map((item) =>
        item.title === houseComunal ? { ...item, checked: true } : item
      );

      setComunal(updatedComunal);
    });
  }, [houseInfo.comunal.length]);

  useEffect(() => {
    houseInfo.additional_conveniences.forEach((houseConvenience: string) => {
      const updatedComunal = convinions.map((item) =>
          item.title === houseConvenience ? { ...item, checked: true } : item
      );

      setConvinions(updatedComunal);
    });
  }, [houseInfo.additional_conveniences.length]);

  useEffect(() => {
    setActiveComunal(
      comunal
        .filter((elem) => elem.checked && elem.title)
        .map((elem) => elem.title)
    );
  }, [comunal]);

  useEffect(() => {
    setActiveConvinions(
      convinions
        .filter((elem) => elem.checked && elem.title)
        .map((elem) => elem.title)
    );
  }, [convinions]);

  useEffect(() => {
    propertyType.forEach((elem) => {
      if (elem.checked) {
        setThisTimeType(elem.title);
      }
    });
  }, [propertyType]);

  useEffect(() => {
    description.forEach((elem) => {
      if (elem.checked) {
        setThisTimeDescription(elem.title);
      }
    });
  }, [description]);

  useEffect(() => {
    status.forEach((elem) => {
      if (elem.checked) {
        setThisTimeStatus(elem.title);
      }
    });
  }, [status]);

  useEffect(() => {
    if (thisTimeDescription !== "Օրավարձ") {
      setPropertyType((prevState) => prevState.slice(0, 4));
    } else {
      setPropertyType((prevState) => [
        ...prevState,
        {
          id: 5,
          title: "Հոսթել",
          checked: false,
        },
        {
          id: 6,
          title: "Հյուրատուն",
          checked: false,
        },
        {
          id: 7,
          title: "Հյուրանոց",
          checked: false,
        },
      ]);
    }
  }, [thisTimeDescription]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setMapAddress(address);
    }, 3000);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [address]);

  useEffect(() => {
    setReqObj({
      cod: code,
      comunal: activeComunal,
      meaning:
        thisTimeType === "Կոմերցիոն" ? buildingTypeState : "Բազմաֆունկցիոնալ",
      ground_area: landSquare,
      ground_width: landLayn,
      ground_height: landErk,
      using_area: allSqare,
      using_width: 0,
      using_height: 0,
      description: homeDescription,
      additional_info: detailedHomeDescription,
      hall_area: hallSquare,
      storage_area: storageLength,
      vitrage,
      day_of_relase: date ? date : today,
      contacts: [
        {
          name,
          phone: number,
          email: mail,
        },
      ],
      property_description: thisTimeDescription,
      property_type: thisTimeType,
      status: thisTimeStatus,
      community: communityState,
      region: regionState,
      address,
      price,
      building_type: buildingTypeState,
      total_area: allSqare,
      room: rooms,
      floors_number: floor,
      building_floors_number: floornes,
      bathroom_count: sanuzel,
      celing_hegiht: roomHeightState,
      state: renovationState,
      additional_conveniences: activeConvinions,
    });
  }, [
    floornes,
    code,
    comunal,
    buildingTypeState,
    landSquare,
    landLayn,
    landErk,
    allSqare,
    homeDescription,
    detailedHomeDescription,
    hallSquare,
    storageLength,
    vitrage,
    date,
    name,
    number,
    mail,
    thisTimeDescription,
    thisTimeType,
    thisTimeStatus,
    communityState,
    regionState,
    address,
    price,
    rooms,
    floor,
    sanuzel,
    activeComunal,
    activeConvinions,
    roomHeightState,
    renovationState,
    convinions,
    floornes,
  ]);

  const postSubmitHandler = (requestObject: any) => {
    const token = JSON.parse(localStorage.getItem("userToken") as string);

    if (!token) {
      navigate("/login");
    }

    fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(requestObject),
    })
      .then((res) => res.json())
      .then((response) => setResponseState(response));
  };

  return (
    <section className={"house_posting"}>
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={"Կոդ"}
        />
      </div>

      <div className={"posting_guyq"}>
        <div className={"div_radios"}>
          <span>ԳՈՒՅՔԻ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆԸ</span>
          <div>
            {description.map((element) => {
              return (
                <label key={element.id}>
                  <input
                    onChange={() =>
                      statementCheckedHandler(setDescription, element.id)
                    }
                    checked={element.checked}
                    type="radio"
                  />
                  {element.title}
                </label>
              );
            })}
          </div>
        </div>

        <div className={"div_radios"}>
          <span>ԳՈՒՅՔԻ ՏԻՊԸ</span>
          <div>
            {propertyType.map((element) => {
              return (
                <label key={element.id}>
                  <input
                    onChange={() =>
                      statementCheckedHandler(setPropertyType, element.id)
                    }
                    type="radio"
                    checked={element.checked}
                  />
                  {element.title}
                </label>
              );
            })}
          </div>
        </div>

        <div className={"div_radios"}>
          <span>Կարգավիճակ</span>
          <div>
            {status.map((element) => {
              return (
                <label key={element.id}>
                  <input
                    onChange={() =>
                      statementCheckedHandler(setStatus, element.id)
                    }
                    type="radio"
                    checked={element.checked}
                  />
                  {element.title}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className={"location_part_posting"}>
        <div className={"location_type_part"}>
          <div className={"div_selects"}>
            <div>
              <span>ՄԱՐԶ</span>
              <div>
                <select
                  value={regionState}
                  onChange={(e) => setRegionState(e.target.value)}
                >
                  {region.map((element: string, loopId: number) => {
                    return (
                      <option key={loopId} value={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <span>ՀԱՄԱՅՆՔ</span>
              <div>
                <select
                  value={communityState}
                  onChange={(e) => setCommunityState(e.target.value)}
                >
                  {community.map((element: string, loopId: number) => {
                    return (
                      <option key={loopId} value={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3vh" }}>
            <span>ՀԱՍՑԵ</span>
            <div className={"hasce"}>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value.trim())}
                placeholder={"Հասցե"}
              />
              <input
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value.trim())}
                placeholder={"Բնակարան"}
              />
            </div>
          </div>
        </div>

        <div className={"map_posting"}>
          {mapAddress ? (
            <MapComponent address={mapAddress} />
          ) : (
            <div
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
              }}
            >
              Քարտեզ
            </div>
          )}
        </div>
      </div>

      <div className={"nkaragrutyun_holder"}>
        <div>
          <div className={"div_textarea"}>
            <textarea
              placeholder={"Նկարագրություն..."}
              value={homeDescription}
              onChange={(e) => setHomeDescription(e.target.value.trim())}
            ></textarea>
          </div>

          <div className={"div_textarea"}>
            <textarea
              placeholder={"Լրացուցիչ դաշտ..."}
              value={detailedHomeDescription}
              onChange={(e) =>
                setDetailedHomeDescription(e.target.value.trim())
              }
            ></textarea>
          </div>
        </div>

        {thisTimeType !== "Կոմերցիոն" &&
          thisTimeType !== "Առանձնատուն" &&
          thisTimeType !== "Հողատարածք" && (
            <div className={"nkaragrutyun_himnakan"}>
              <div className={"div_selects"}>
                <div>
                  <span>ԳԻՆ</span>
                  <div>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(+e.target.value)}
                      placeholder={"Թիվ"}
                    />
                  </div>
                </div>

                <div>
                  <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
                  <div>
                    <select
                      value={buildingTypeState}
                      onChange={(e) => setBuildingTypeState(e.target.value)}
                    >
                      {buildingType.map((element) => {
                        return (
                          <option key={element.id} value={element.title}>
                            {element.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className={"div_selects"}>
                <div>
                  <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
                  <div>
                    <input
                      type="number"
                      value={allSqare}
                      onChange={(e) => setAllSqare(+e.target.value)}
                      placeholder={"մետր քառակուսի"}
                    />
                  </div>
                </div>

                <div>
                  <span>ՍԵՆՅԱԿՆԵՐ</span>
                  <div>
                    <input
                      type="number"
                      value={rooms}
                      onChange={(e) => setRooms(+e.target.value)}
                      placeholder={"Թիվ"}
                    />
                  </div>
                </div>
              </div>

              <div className={"div_selects"}>
                <div>
                  <span>ՀԱՐԿ</span>
                  <div>
                    <input
                      type="number"
                      value={floor}
                      onChange={(e) => setFloor(+e.target.value)}
                      placeholder={"Թիվ"}
                    />
                  </div>
                </div>

                <div>
                  <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                  <div>
                    <input
                      type="number"
                      value={floornes}
                      onChange={(e) => setFloornes(+e.target.value)}
                      placeholder={"Թիվ"}
                    />
                  </div>
                </div>
              </div>

              <div className={"div_selects"}>
                <div className={"div_inputs"}>
                  <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
                  <div>
                    <input
                      type="number"
                      value={sanuzel}
                      onChange={(e) => setSanuzel(+e.target.value)}
                      placeholder={"Թիվ"}
                    />
                  </div>
                </div>

                <div className={"div_inputs"}>
                  <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
                  <div>
                    <select
                      value={roomHeightState}
                      onChange={(e) => setRoomHeightState(+e.target.value)}
                    >
                      {roomHeiht.map((element) => {
                        return (
                          <option key={element.id} value={element.title}>
                            {element.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className={"div_inputs"}>
                  <span>ՎԻՃԱԿԸ</span>
                  <div>
                    <select
                      value={renovationState}
                      onChange={(e) => setRenovationState(e.target.value)}
                    >
                      {renovation.map((element) => {
                        return (
                          <option key={element.id} value={element.title}>
                            {element.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

        {thisTimeType === "Առանձնատուն" && (
          <div className={"nkaragrutyun_himnakan"}>
            <div className={"div_selects"}>
              <div>
                <span>ԳԻՆ</span>
                <div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div>
                <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
                <div>
                  <select
                    value={buildingTypeState}
                    onChange={(e) => setBuildingTypeState(e.target.value)}
                  >
                    {buildingType.map((element) => {
                      return (
                        <option key={element.id} value={element.title}>
                          {element.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>Հողի մակ</span>
                <div>
                  <input
                    type="number"
                    value={landSquare}
                    onChange={(e) => setLandSquare(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի լայն</span>
                <div>
                  <input
                    type="number"
                    value={landLayn}
                    onChange={(e) => setLandLayn(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի երկ</span>
                <div>
                  <input
                    type="number"
                    value={landErk}
                    onChange={(e) => setLandErk(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
                <div>
                  <input
                    type="number"
                    value={allSqare}
                    onChange={(e) => setAllSqare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>ՍԵՆՅԱԿՆԵՐ</span>
                <div>
                  <input
                    type="number"
                    value={rooms}
                    onChange={(e) => setRooms(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>ՀԱՐԿ</span>
                <div>
                  <input
                    type="number"
                    value={floor}
                    onChange={(e) => setFloor(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div>
                <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                <div>
                  <input
                    type="number"
                    value={floornes}
                    onChange={(e) => setFloornes(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div className={"div_inputs"}>
                <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
                <div>
                  <input
                    type="number"
                    value={sanuzel}
                    onChange={(e) => setSanuzel(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div className={"div_inputs"}>
                <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
                <div>
                  <select
                    value={roomHeightState}
                    onChange={(e) => setRoomHeightState(+e.target.value)}
                  >
                    {roomHeiht.map((element) => {
                      return (
                        <option key={element.id} value={element.title}>
                          {element.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className={"div_inputs"}>
                <span>ՎԻՃԱԿԸ</span>
                <div>
                  <select
                    value={renovationState}
                    onChange={(e) => setRenovationState(e.target.value)}
                  >
                    {renovation.map((element) => {
                      return (
                        <option key={element.id} value={element.title}>
                          {element.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {thisTimeType === "Կոմերցիոն" && (
          <div className={"nkaragrutyun_himnakan"}>
            <div className={"div_selects"}>
              <div>
                <span>ԳԻՆ</span>
                <div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>

              <div>
                <span>Նշանակություն</span>
                <div>
                  <select
                    value={buildingTypeState}
                    onChange={(e) => setBuildingTypeState(e.target.value)}
                  >
                    {meaning.map((element: string, index: number) => {
                      return (
                        <option key={index} value={element}>
                          {element}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>Հողի ՄԱԿԵՐԵՍ</span>
                <div>
                  <input
                    type="number"
                    value={landSquare}
                    onChange={(e) => setLandSquare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի լայն</span>
                <div>
                  <input
                    type="number"
                    value={landLayn}
                    onChange={(e) => setLandLayn(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի երկ</span>
                <div>
                  <input
                    type="number"
                    value={landErk}
                    onChange={(e) => setLandErk(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>Սրահի ՄԱԿԵՐԵՍ</span>
                <div>
                  <input
                    type="number"
                    value={hallSquare}
                    onChange={(e) => setHallSquare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Պահեստի լայն</span>
                <div>
                  <input
                    type="number"
                    value={storageLength}
                    onChange={(e) => setStorageLength(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Վիտչաժ</span>
                <div>
                  <input
                    type="number"
                    value={vitrage}
                    onChange={(e) => setVitrage(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>
            </div>

            {thisTimeDescription !== "Վաճառք" &&
              thisTimeType === "Կոմերցիոն" && (
                <div className={"div_selects"}>
                  <div>
                    <span>Ազատվում է</span>
                    <div>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder={"մետր քառակուսի"}
                      />
                    </div>
                  </div>
                </div>
              )}
          </div>
        )}

        {thisTimeType === "Հողատարածք" && (
          <div className={"nkaragrutyun_himnakan"}>
            <div className={"div_selects"}>
              <div>
                <span>Հողի ՄԱԿԵՐԵՍ</span>
                <div>
                  <input
                    type="number"
                    value={allSqare}
                    onChange={(e) => setAllSqare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի լայն</span>
                <div>
                  <input
                    type="number"
                    value={allSqare}
                    onChange={(e) => setAllSqare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>

              <div>
                <span>Հողի երկ</span>
                <div>
                  <input
                    type="number"
                    value={allSqare}
                    onChange={(e) => setAllSqare(+e.target.value)}
                    placeholder={"մետր քառակուսի"}
                  />
                </div>
              </div>
            </div>

            <div className={"div_selects"}>
              <div>
                <span>ԳԻՆ</span>
                <div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                    placeholder={"Թիվ"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={"owner_contact_posting"}>
        <h2>Կոնտակտներ</h2>

        <div>
          <div className={"contact_input_posting"}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Անուն"}
            />
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder={"Հեռախոսահամար"}
            />
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder={"Մաիլ"}
            />
          </div>
        </div>

        <div></div>
      </div>

      <div className={"information_posting"}>
        <div className={"div_checkboxes"}>
          <div>ԿՈՄՈՒՆԱԼ</div>
          <div>
            {comunal.map((element) => {
              return (
                <label key={element.id}>
                  <input
                    checked={element.checked}
                    onChange={() => setComunalChecks(setComunal, element.id)}
                    type="checkbox"
                  />
                  {element.title}
                </label>
              );
            })}
          </div>
        </div>

        <div className={"div_checkboxes"}>
          <div>ԼՐԱՑՈՒՑԻՉ ՀԱՐՄԱՐՈՒԹՅՈՒՆՆԵՐ</div>
          <div>
            {convinions.map((element) => {
              return (
                <label key={element.id}>
                  <input
                    checked={element.checked}
                    onChange={() => setComunalChecks(setConvinions, element.id)}
                    type="checkbox"
                  />
                  {element.title}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className={"images_posting"}>
        <div>
          <div className={"file_input_part"}>
            <label className={"file_input_label"}>
              <input
                type="file"
                onChange={(e) =>
                  imageGettingHandler(e, setOurImages, setLocalOurImages)
                }
                multiple={true}
                hidden
              />
              <span>Լուսանկար մեր համար</span>
            </label>
          </div>

          <div className={"images_shower"}>
            {localOurImages.map((element: string, index: number) => {
              return (
                <div key={index + Math.random()} className={"littleImage"}>
                  <span
                    onClick={() =>
                      deleteFromImageListHandler(
                        index,
                        setLocalOurImages,
                        setOurImages
                      )
                    }
                  >
                    X
                  </span>
                  <img src={element} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className={"file_input_part"}>
            <label className={"file_input_label"}>
              <input
                type="file"
                onChange={(e) =>
                  imageGettingHandler(e, setAllImages, setLocalAllImages)
                }
                multiple={true}
                hidden
              />
              <span>Լուսանկար Ընդհաննուր</span>
            </label>
          </div>

          <div className={"images_shower"}>
            {localAllImages.map((element: string, index: number) => {
              return (
                <div key={index + Math.random()} className={"littleImage"}>
                  <span
                    onClick={() =>
                      deleteFromImageListHandler(
                        index,
                        setLocalAllImages,
                        setAllImages
                      )
                    }
                  >
                    X
                  </span>
                  <img src={element} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className={"file_input_part"}>
            <label className={"file_input_label"}>
              <input
                type="file"
                onChange={(e) =>
                  imageGettingHandler(
                    e,
                    setVkayakanImages,
                    setLocalVkayakanImages
                  )
                }
                multiple={true}
                hidden
              />
              <span>Լուսանկար Վկայականի</span>
            </label>
          </div>

          <div className={"images_shower"}>
            {localVkayakanImages.map((element: string, index: number) => {
              return (
                <div key={index + Math.random()} className={"littleImage"}>
                  <span
                    onClick={() =>
                      deleteFromImageListHandler(
                        index,
                        setLocalVkayakanImages,
                        setVkayakanImages
                      )
                    }
                  >
                    X
                  </span>
                  <img src={element} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={"submit_button"}
        onClick={() => postSubmitHandler(reqObj)}
      >
        Edit
      </div>
    </section>
  );
};

export default withAuthorization(EditPost);
