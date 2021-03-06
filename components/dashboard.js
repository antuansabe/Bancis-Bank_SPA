
const Dashboard = () => {

    return `
    <div id="data-router">
 <input type="checkbox" name="" id="sidebar-toggle"">

    <div class="sidebar">
        <div class="sidebar-brand">
            <div class="brand-flex">
                <img src="img/logo.png" width="=30px" alt="">

                <div class="brand-icons">
                    <spa class="las la-bell"></span>
                    <span class="las la-user-circle"</span>
                </div>
            </div>
        </div>

       <div class="sidebar-main">
           <div class="sidebar-user">
               <img src="img/2.jpeg" alt="">
               <div>
                   <h3>Juan Sebastian Agudelo</h3>
                   <span>juansebastian@gmail.com</span>
               </div>
           </div>
            <div class="sidebar-menu">
                <div class="menu-block"> 
                    <div class="menu-head">
                        <span>Tablero</span>
                    </div>
                    <ul>
                        <li>
                          <a href="">
                            <span class="las la-balance-scale"></span>
                            Finanzas
                           </a>
                        </li>
                        
                    </ul>
                    <div class="menu-head">
                        <span>Apliciones </span>
                    </div>
                    <ul>
                        <li>
                          <a href="">
                            <span class="las la-calendar"></span>
                            Calendario
                           </a>
                        </li>
                        <li>
                            <a href="">
                              <span class="las la-shopping-cart"></span>
                              Productos a Contratar
                             </a>
                         </li>
                         <li>
                            <a href="">
                              <span class="las la-envelope"></span>
                              Notificaciones
                             </a>
                         </li>
                         <li>
                            <a href="">
                              <span class="las la-check-circle"></span>
                              Cerrar sesion
                             </a>
                         </li>
                    </ul>
                </div>
            </div>
           </div>
       </div>
    </div>  
    
    <div class="main-content">
        <header>
           <div class="menu-toggle">
               <label for="sidebar-toggle">
                   <span class="las la-bars"></span>
               </label>

           </div>

            <div class="header-icons">
                <span class="las la-search"></span>
                <span class="las la-bookmark"></span>
                <span class="las la-sms"></span>
            </div>
        </header>

        <main>
            <div class="page-header">
                <div>
                    <h1>Bienvenido Juan Sebastian </h1>
                    <small>Ultima sesion, 20.Abril.2021</small>

                   <h2 class="productos">Productos contratados:</h2>
                </div>

                <div class="header-actions">
                    <!--Veremos si ponemos de nuevo los botones que iban aqui-->
                    </button>
                </div>
            </div>

            <div class="cards">
                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                          <div class=""card-head>
                             <span>Tarjeta de credito</span>
                             <small>Monto total de deuda</small>
                          </div>
                             <h2>$1600 USD</h2>
                             <small>10% mas deuda que el mes anterior </small>
                        </div>
                        <div class="card-chart danger">
                            <span class="las la-chart-line"></span>
                        </div>
                    </div>
                </div>

                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                          <div class=""card-head>
                             <span>Cuenta de Ahorro</span>
                             <small>Saldo Promedio</small>
                          </div>
                             <h2>$58 640.50 USD</h2>
                             <small>4% menos que el mes anterior </small>
                        </div>
                        <div class="card-chart sucess">
                            <span class="las la-chart-line"></span>

                        </div>
                    </div>

                </div>

                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                          <div class=""card-head>
                             <span>Inversiones</span>
                             <small>Criptomonedas totales</small>
                          </div>
                             <h2>0.00955802 BTC</h2>
                             <small>43% de rendimiento desde el ultimo mes </small>
                        </div>
                        <div class="card-chart yellow">
                            <span class="las la-chart-line"></span>

                        </div>
                    </div>
                </div> 
            </div>

            <div class="job-grid">
                <div class="analytics-card">
                    <div class="analytics-head">
                        <h3>Reduccion del capital total</h3>
                                <span class="las la-ellipsis-h"></span>
                    </div>
                    <div class="analytics-chart">
                        <div class="chart-circle">
                            <h1>24%</h1>
                        </div>

                        <div class="analytics-note">
                            <small>
                                Note: Actualmente mantiene buena salud financiera
                            </small>
                        </div>
                        <div class="analytics-btn">
                            <button>Generar estado de cuenta</button>

                        </div>

                    </div>
                </div>

                <div class="jobs">
                       <h2>Detalle <small>mira todos los detalles de tu cuenta<span class="las la-arrow-rigth"></span></small>
                       </h2>
                
                    <table width="100%">
                        <tbody>
                          
                            <tr>
                                <td>
                                    <div>
                                    <span class="indicator"></span>
                                    </div> 
                                </td>
                                <td>
                                    <div>
                                       TARJETA DE CREDITO
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        Saldo disponible
                                    </div>
                                </td>
                                <td>
                                     <div>
                                    Saldo gastado
                                     </div>
                                </td>
                                <td>
                                    <div>
                                      Ultima consulta hace 6 dias
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button>Generar Reporte</button>
                                    </div>
                                   
                                </td>
                            </tr>
                            <tr>   
                                <tr>
                                    <td>
                                        <div>
                                        <span class="indicator even"></span>
                                        </div> 
                                    </td>
                                    <td>
                                        <div>
                                            CUENTA DE AHORRO
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            Saldo disponible
                                        </div>
                                    </td>
                                    <td>
                                         <div>
                                           Saldo gastado 
                                         </div>
                                    </td>
                                    <td>
                                        <div>
                                            Ultima consulta hace 4 dias
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button>Generar Reporte</button>
                                        </div>
                                       
                                    </td>
                                </tr>
                                <td>
                                    <div>
                                        INVERSIONES
                                    </div>
                                </td>
                                <td>
                                   <div>
                                    Comisiones
                                   </div>

                                </td>
                                <td>
                                    <div>
                                     Tasa de interes
                                    </div>
 
                                 </td>
                                <td>
                                    <div>
                                        Saldo actual
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        Ultima consulta hace 12 dias
                                        
                                    </div>
                                </td>
                                <td>
                                   <div>
                                    <button>Generar Reporte</button>
                                   </div>
                                </td>
                            </tr>                            


                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <label for="sidebar-toggle" class="body-label"></label>
    </div>
`;
}