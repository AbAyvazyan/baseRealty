import './HousePosting.css'

const HousePosting = () =>{
    return(
       <section className={'house_posting'}>

           <div>
               <input type="text" placeholder={'username'}/>
           </div>

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
               </div>
           </div>


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


           <div className={'div_selects'}>
               <div>
                    <span>ՄԱՐԶ</span>
                    <select>
                        <option value="Yerevan">Երևան</option>
                    </select>
               </div>

               <div>
                   <span>ՀԱՄԱՅՆՔ</span>
                   <select>
                       <option value="Arabkir">Արաբկիր</option>
                   </select>
               </div>
           </div>

           <div className={'div_inputs'}>
               <span>ՀԱՍՑԵ</span>
               <div>
                   <input type="text" placeholder={'Փողոց'}/>
                   <input type="text" placeholder={'շենք'}/>
                   <input type="text" placeholder={'Բնակարան'}/>
               </div>
           </div>

           <div className={'div_inputs'}>
               <span>ԳԻՆ</span>
               <div>
                   <input type="text" placeholder={'price'}/>
               </div>
           </div>



           <div className={'div_selects'}>
               <div>
                   <span>ՀԱՐԿ</span>
                   <select>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                   </select>
               </div>

               <div>
                   <span>ՀԱՐԿԱՅՆՈՒԹՅՈՒՆ</span>
                   <select>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                   </select>
               </div>
           </div>


           <div className={'div_inputs'}>
               <span>ԸՆԴՀԱՆՈՒՐ ՄԱԿԵՐԵՍ</span>
               <div>
                   <input type="number" placeholder={'Ք.Մ'}/>
               </div>
           </div>


           <div className={'div_radios'}>
               <span>ՍԵՆՅԱԿՆԵՐ</span>
               <div >
                   <label>
                       <input type="radio"/>
                       1
                   </label>

                   <label>
                       <input type="radio"/>
                       2
                   </label>

                   <label>
                       <input type="radio"/>
                       3
                   </label>

                   <label>
                       <input type="radio"/>
                       4
                   </label>

                   <label>
                       <input type="radio"/>
                       5
                   </label>

                   <label>
                       <input type="radio"/>
                       6
                   </label>

                   <label>
                       <input type="radio"/>
                       7+
                   </label>
               </div>
           </div>


           <div className={'div_radios'}>
               <span>ՍԱՆՀԱՆԳՈՒՅՑ</span>
               <div >
                   <label>
                       <input type="radio"/>
                       1
                   </label>

                   <label>
                       <input type="radio"/>
                       2
                   </label>

                   <label>
                       <input type="radio"/>
                       3
                   </label>

                   <label>
                       <input type="radio"/>
                       4
                   </label>

                   <label>
                       <input type="radio"/>
                       5+
                   </label>
               </div>
           </div>


           <div className={'div_radios'}>
               <span>ՇԻՆՈՒԹՅԱՆ ՏԻՊԸ</span>
               <div >
                   <label>
                       <input type="radio"/>
                       Մոնոլիտ
                   </label>

                   <label>
                       <input type="radio"/>
                       Քարե
                   </label>

                   <label>
                       <input type="radio"/>
                       Պանելային
                   </label>

                   <label>
                       <input type="radio"/>
                       Այլ
                   </label>

                   <label>
                       <input type="checkbox"/>
                       Նորակառույց
                   </label>
               </div>
           </div>


           <div className={'div_radios'}>
               <span>ԱՌԱՍՏԱՂԻ ԲԱՐՁՐՈՒԹՅՈՒՆ</span>
               <div >
                   <label>
                       <input type="radio"/>
                       2.6Մ
                   </label>

                   <label>
                       <input type="radio"/>
                       2.8Մ
                   </label>

                   <label>
                       <input type="radio"/>
                       3.0Մ
                   </label>

                   <label>
                       <input type="radio"/>
                       3.2Մ
                   </label>

                   <label>
                       <input type="checkbox"/>
                       3.8Մ
                   </label>

                   <label>
                       <input type="checkbox"/>
                       5Մ+
                   </label>
               </div>
           </div>


           <div className={'div_radios'}>
               <span>ՎԻՃԱԿԸ</span>
               <div >
                   <label>
                       <input type="radio"/>
                       Վերանորոգված
                   </label>

                   <label>
                       <input type="radio"/>
                       Լավ
                   </label>

                   <label>
                       <input type="radio"/>
                       Զրոյական
                   </label>
               </div>
           </div>

           <div className={'div_checkboxes'}>
                <div>ԿՈՄՈՒՆԱԼ ՀԱՐՄԱՐՈՒԹՅՈՒՆՆԵՐ & ԼՐԱՑՈՒՑԻՉ</div>
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


           <div className={'file_input_part'}>
               <label className={'file_input_label'}>
                   <input type="file" multiple={true} hidden/>
                   <span>Add Images</span>
               </label>


           </div>


           <div className={'submit_button'}>Post</div>

       </section>



    )
}

export default HousePosting