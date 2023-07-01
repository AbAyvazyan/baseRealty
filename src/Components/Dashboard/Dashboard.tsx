import './Dashboard.css'
import withAuthorization from "../../hoc/autorization";

const Dashboard =() =>{
    return(
        <section className={'dashboard'}>
            <div className={'dashboard_part'}>
                 <div className={'dashboard_tables'}>

                        <div className={'dashboard_inputs'}>
                            <div>
                                <select>
                                    <option value="sale">Վաճառք</option>
                                    <option value="rent">Վարձ</option>
                                    <option value="daily">Օրավարձ</option>
                                </select>
                            </div>

                            <div>
                                <input type="text" placeholder={'Code'}/>
                            </div>

                            <div>
                                <select>
                                    <option value="sale">Բնակարան</option>
                                    <option value="rent">Առանձնատուն</option>
                                    <option value="daily">Կոմերցիոն</option>
                                    <option value="daily">Հողատարածք</option>
                                </select>
                            </div>

                            <div>
                                <select>
                                    <option value="sale">Ակտիվ</option>
                                    <option value="rent">Ժամանակավոր դադար</option>
                                    <option value="daily">Վաճառված</option>
                                    <option value="daily">Չանրադառնալ</option>
                                </select>
                            </div>

                            <div>
                                <select>
                                    <option value="sale">Վաճառք</option>
                                    <option value="rent">Վարձ</option>
                                    <option value="daily">Օրավարձ</option>
                                </select>
                            </div>

                            <div>
                                <select>
                                    <option value="arabkir">Արաբկիր</option>
                                    <option value="kentron">Կենտրոն</option>
                                    <option value="davtashen">Դավթաշեն</option>
                                    <option value="ajapnyak">Աջափնյակ</option>
                                    <option value="avan">Ավան</option>
                                    <option value="erebuni">Էրեբունի</option>
                                    <option value="qanaqer">Քանաքեռ-Զեյթուն</option>
                                    <option value="malatia">Մալաթիա-Սեբաստիա</option>
                                    <option value="norq-marash">Նորք-Մարաշ</option>
                                    <option value="nor-norq">Նոր Նորք</option>
                                    <option value="nubarashen">Նուբարաշեն</option>
                                    <option value="shengavit">Շենգավիթ</option>
                                </select>
                            </div>

                            <div>
                                <input type="text" placeholder={'Code'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'Code'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'from'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'to'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'to'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'to'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'to'}/>
                            </div>

                            <div>
                                <select>
                                    <option value="old">հին վերանորոգում</option>
                                    <option value="zero-cond">զրոական</option>
                                    <option value="old<">վերանորոգում 10 ավել</option>
                                    <option value="old">վերանորոգում 5-10</option>
                                    <option value="good">վերանորոգում 2-5</option>
                                    <option value="good">վերանորոգված 2 տարի</option>
                                    <option value="new">վերանորոգված չբնակեցված</option>
                                    <option value="new">վերանորոգված դիզաիներական ոճով</option>
                                </select>
                            </div>

                            <div>
                                <select>
                                    <option value="qare">Ստալինկա</option>
                                    <option value="qare">Քարե</option>
                                    <option value="qare">Պոստ Խրյուշովկա</option>
                                    <option value="qare">Խրյուշովկա</option>
                                    <option value="panelain">Բարձրահարկ</option>
                                    <option value="panelain">Խոշոր Պանելային</option>
                                    <option value="panelain">Կասետաին</option>
                                    <option value="monolith">Նորակառույց</option>
                                    <option value="monolith">Նորակառույց Կառուցապատողից</option>
                                </select>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                                <input type="text" placeholder={'from'}/>
                                <input type="text" placeholder={'to'}/>
                            </div>

                            <div>
                                <input type="text" placeholder={'Code'}/>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>


                        </div>

                        <div className={'single_dash_line'}>
                            <div></div>
                            <div>#Կոդ</div>
                            <div>Գույքի տիպը</div>
                            <div>Կարգավիճակը</div>
                            <div>Մարզ</div>
                            <div>Տարածք</div>
                            <div>Փողոց</div>
                            <div>Շենք</div>
                            <div>Սենյակ</div>
                            <div>Հարկ</div>
                            <div>Հարկայնություն</div>
                            <div>Ընդ.Տարածք</div>
                            <div>Բնակելի Տարածք</div>
                            <div>Վիճակ</div>
                            <div>Տիպ</div>
                            <div>Բալկոն</div>
                            <div>Սանհանգույց</div>
                            <div>Ավտոտնակ</div>
                            <div>Նկուղ</div>
                            <div>Գին</div>
                            <div>Մասնագետ</div>
                            <div>Լրացուցիչ</div>
                            <div>Քառակուսու արժեք</div>
                            <div>Փոփոխություն</div>
                        </div>

                    {[1,2,3,4,5,6,7,8,9,10,11].map(item=>{
                        return <div key={item} className={'single_dash_line'}>
                            <div><input type="checkbox" style={{width:'20px',height:'20px'}}/></div>
                            <div>dp777</div>
                            <div>Erevan</div>
                            <div>Kentron</div>
                            <div>Teryan</div>
                            <div>Davo</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div>$333333</div>
                            <div><div className={'dashboard_edit_button'}>Edit</div></div>
                        </div>
                    })}



                </div>

            </div>
        </section>
    )
}

export default withAuthorization(Dashboard)