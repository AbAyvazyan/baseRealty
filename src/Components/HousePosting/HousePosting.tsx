import './HousePosting.css'

const HousePosting = () =>{
    return(
       <section className={'house_posting'}>

           <div>
               <input type="text" placeholder={'Կոդ'}/>
           </div>



           <div className={'posting_guyq'}>

           <div className={'div_radios'}>
               <span>ԳՈՒՅՔԻ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆԸ</span>
               <div>
                   <label>
                       <input type="radio"/>
                       Վաճառք
                   </label>

                   <label>
                       <input type="radio"/>
                       Վարձ
                   </label>

                   <label>
                       <input type="radio"/>
                       Օրավարձ
                   </label>

               </div>
           </div>

               <div className={'line'}></div>


           <div  className={'div_radios'}>
               <span>ԳՈՒՅՔԻ ՏԻՊԸ</span>
               <div>
                   <label>
                       <input type="radio"/>
                       Բնակարան
                   </label>

                   <label>
                       <input type="radio"/>
                       Առանձնատուն
                   </label>

                   <label>
                       <input type="radio"/>
                       Կոմերցիոն
                   </label>

                   <label>
                       <input type="radio"/>
                       Հողատարածք
                   </label>
               </div>
           </div>

               <div className={'line'}></div>

           <div className={'div_radios'}>
               <span>Կարգավիճակ</span>
               <div>
                   <label>
                       <input type="radio"/>
                       Ակտիվ
                   </label>

                   <label>
                       <input type="radio"/>
                       Ժամանակավոր դադար
                   </label>

                   <label>
                       <input type="radio"/>
                       Վաճառված
                   </label>

                   <label>
                       <input type="radio"/>
                       Չանրադառնալ
                   </label>
               </div>
           </div>

           </div>


            <div className={'location_part_posting'}>


                    <div className={'location_type_part'}>

                        <div className={'div_selects'}>


                                    <div>
                                        <span>ՄԱՐԶ</span>
                                        <div >

                                            <select>
                                                <option value="Yerevan">Երևան</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <span>ՀԱՄԱՅՆՔ</span>
                                        <div >

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
                                    </div>


                        </div>


                <div style={{marginTop:'3vh'}}>
                    <span>ՀԱՍՑԵ</span>
                    <div className={'hasce'}>
                        <input type="text" placeholder={'Փողոց'}/>
                        <input type="text" placeholder={'շենք'}/>
                        <input type="text" placeholder={'Բնակարան'}/>
                    </div>
                </div>
                    </div>

                <div style={{color:'red' ,width:'100%',height:'100%',backgroundColor:'rgba(189,189,189,0.3)'}}>
                    qartez
                </div>

           </div>


           <div className={'nkaragrutyun_holder'}>
               <div>
                    <div className={'div_textarea'}>
                        <textarea placeholder={'Նկարագրություն...'}></textarea>
                    </div>

                    <div className={'div_textarea'}>
                        <textarea placeholder={'Լրացուցիչ դաշտ...'}></textarea>
                    </div>
               </div>


               <div className={'nkaragrutyun_himnakan'}>
                   <div className={'div_selects'}>
                    <div>
                        <span>ԳԻՆ</span>
                        <div>
                            <input type="text" placeholder={'Թիվ'}/>
                        </div>
                    </div>

                   <div>
                       <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
                       <div >

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
                               <option value="ayl">Այլ</option>
                               {/*monolity norakaruycna*/}
                           </select>
                       </div>
                   </div>
                   </div>


                   <div className={'div_selects'}>
                       <div>
                           <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
                           <div>
                               <input type="number" placeholder={'մետր քառակուսի'}/>
                           </div>
                       </div>

                       <div>
                           <span>ՍԵՆՅԱԿՆԵՐ</span>
                           <div>
                               <input type="number" placeholder={'Թիվ'}/>
                           </div>
                       </div>
                   </div>

                    <div className={'div_selects'}>
                        <div>
                            <span>ՀԱՐԿ</span>
                            <div>
                                <input type="number" placeholder={'Թիվ'}/>
                            </div>
                        </div>

                        <div>
                            <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                            <div>
                                <input type="number" placeholder={'Թիվ'}/>
                            </div>
                        </div>
                    </div>





                    <div className={'div_selects'}>

                            <div className={'div_inputs'}>
                                <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
                                    <div>
                                        <input type="number" placeholder={'Թիվ'}/>
                                    </div>
                            </div>





                            <div className={'div_inputs'}>
                                <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
                                <div >


                                        <select>
                                            <option value="2.45">2.45</option>
                                            <option value="2.55">2.55</option>
                                            <option value="2.75<">2.75</option>
                                            <option value="3">3</option>
                                            <option value="3.20">3.20</option>
                                        </select>

                                </div>
                            </div>


                            <div className={'div_inputs'}>
                                <span>ՎԻՃԱԿԸ</span>
                                <div >


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

                            </div>
                    </div>

               </div>


           </div>

           <div className={'owner_contact_posting'}>
                <h2>Կոնտակտներ</h2>

                <div>
                    <div className={'contact_input_posting'}>
                        <input type="text" placeholder={'Անուն'}/>
                        <input type="text" placeholder={'Հեռախոսահամար'}/>
                        <input type="text" placeholder={'Մաիլ'}/>
                    </div>


                </div>


               <div><div className={'add_contact_section'}>+</div></div>
           </div>


           <div className={'information_posting'}>

           <div className={'div_checkboxes'}>
                <div>ԿՈՄՈՒՆԱԼ</div>
                <div style={{gridTemplateColumns:'1fr 1fr'}}>
                    <label>
                        <input type="checkbox"/>
                        Գազ
                    </label>

                    <label>
                        <input type="checkbox"/>
                        էլեկտրոէներգիա
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջուր
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Համացանց
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցման համակարգ
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Օդորակիչ
                    </label>
                </div>
           </div>

               <div className={'div_checkboxes'}>
                   <div>ԼՐԱՑՈՒՑԻՉ ՀԱՐՄԱՐՈՒԹՅՈՒՆՆԵՐ</div>
                   <div>
                       <label>
                           <input type="checkbox"/>
                           Արևկողմ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ավտոկայանատեղի
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Անվտանգություն
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Բուխարրի
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Բաց պատշգամբ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Լոջա
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Վերելակ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Նկուղ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ձեղնահարկ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Խորդանոց
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Բարձր առաջին հարկ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Տաքացվող հատակ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Գեղեցիկ տեսարան
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Կանգառի մոտ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Մետրո
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ճանապարհամերձ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Զբոսայգի
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Պարսպապատ
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Շոգեբաղնիք
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Կահույք
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Տեխնիկա
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Խոհանոցաին Կահույք
                       </label>
                   </div>
               </div>

           </div>


           <div className={'images_posting'}>

               <div>
                    <div className={'file_input_part'}>
                        <label className={'file_input_label'}>
                            <input type="file" multiple={true} hidden/>
                            <span>Լուսանկար մեր համար</span>
                        </label>
                    </div>

                   <div className={'images_shower'}>

                   </div>
               </div>

               <div>
                   <div className={'file_input_part'}>
                       <label className={'file_input_label'}>
                           <input type="file" multiple={true} hidden/>
                           <span>Լուսանկար Ընդհաննուր</span>
                       </label>
                   </div>

                   <div className={'images_shower'}>

                   </div>
               </div>

               <div>
                   <div className={'file_input_part'}>
                       <label className={'file_input_label'}>
                           <input type="file" multiple={true} hidden/>
                           <span>Լուսանկար Վկայականի</span>
                       </label>
                   </div>

                   <div className={'images_shower'}>

                   </div>
               </div>


           </div>


           <div className={'submit_button'}>Post</div>

       </section>



    )
}

export default HousePosting