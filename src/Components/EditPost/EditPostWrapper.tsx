import EditPost from "./EditPost";
import { useParams } from "react-router";
import {useEffect, useState} from "react";

const EditPostWrapper = () => {
  const [houseInfo,setHouseInfo] = useState<any>({})
  const [flag,setFlag] = useState(false)
  const params = useParams();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken") as string);

    fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((response) => setHouseInfo(response));
  }, [params]);

  useEffect(()=>{
    if(!Object.keys(houseInfo).length){
      return
    }
    setFlag(true)
  },[houseInfo])


  return flag && <EditPost houseInfo={houseInfo} />
};

export default EditPostWrapper;
