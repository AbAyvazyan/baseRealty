import './HousePosting.css'

const HousePosting = () =>{
    return(
       <section className={'house_posting'}>

           <div>
               <input type="text" placeholder={'username'}/>
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
                                                <option value="Arabkir">Արաբկիր</option>
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
                               <option value="Arabkir">Մոնոլիտ</option>
                               <option value="Arabkir">Քարե</option>
                               <option value="Arabkir">Պանելային</option>
                               <option value="Arabkir">Նորակառույց</option>
                               <option value="Arabkir">Այլ</option>
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
                                        <option value="2.45">2.45</option>
                                        <option value="2.55">2.55</option>
                                        <option value="2.75<">2.75</option>
                                        <option value="3">3</option>
                                        <option value="3.20">3.20</option>
                                    </select>

                                </div>

                            </div>
                    </div>

               </div>


           </div>


           <div className={'information_posting'}>

           <div className={'div_checkboxes'}>
                <div>ԿՈՄՈՒՆԱԼ</div>
                <div>
                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>

                    <label>
                        <input type="checkbox"/>
                        Ջեռուցում
                    </label>
                </div>
           </div>

               <div className={'div_checkboxes'}>
                   <div>ԼՐԱՑՈՒՑԻՉ ՀԱՐՄԱՐՈՒԹՅՈՒՆՆԵՐ</div>
                   <div>
                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>

                       <label>
                           <input type="checkbox"/>
                           Ջեռուցում
                       </label>
                   </div>
               </div>

           </div>


           <div className={'images_posting'}>

               <div>
                    <div className={'file_input_part'}>
                        <label className={'file_input_label'}>
                            <input type="file" multiple={true} hidden/>
                            <span>Լուսանկար</span>
                        </label>
                    </div>

                   <div className={'images_shower'}>

                   </div>
               </div>

               <div>
                   <div className={'file_input_part'}>
                       <label className={'file_input_label'}>
                           <input type="file" multiple={true} hidden/>
                           <span>Լուսանկար</span>
                       </label>
                   </div>

                   <div className={'images_shower'}>

                   </div>
               </div>

               <div>
                   <div className={'file_input_part'}>
                       <label className={'file_input_label'}>
                           <input type="file" multiple={true} hidden/>
                           <span>Լուսանկար</span>
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