import Image from 'next/image';
import SER_SOSTE from '@/images/icons/img001_servicios.svg';
import PRODUCT_SOSTE from '@/images/icons/img002_produtoc_sostenibles.svg';
import CIUD_SOSTE from '@/images/icons/img003_ciudades_soste.svg';
import RECURSOS from '@/images/icons/img004_recursos.svg';


export const LineasDeAccion = () => {
    return (
        <section id='lineas_accion' className="bg-gray-100 px-6 sm:px-12 md:px-20 py-16 sm:py-20 md:py-24">
            <div className="mx-auto px-4 sm:px-8 md:px-16">
                <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 justify-start">
                    
                    {/* Título y descripción */}
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[240px] sm:max-w-[300px] tracking-tighter mb-4 sm:mb-0">
                            LÍNEAS DE ACCIÓN
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-[444px] sm:max-w-[500px]">
                            Nuestras líneas de acción están preparadas para resolver diversas áreas.
                        </p>
                    </div>

                    {/* Contenedor de las tarjetas */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12 md:gap-16">
                        
                        {/* Tarjeta 1 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[300px]">
                            <Image
                                src={SER_SOSTE}
                                alt="Servicios sostenibles"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left">
                                Servicios sostenibles
                            </h3>
                            <p>•Turismo sostenible</p>
                            <p>•Educación</p>
                            <p>•Cultura</p>
                            <p>•Finanzas Verdes</p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[300px]">
                            <Image
                                src={PRODUCT_SOSTE}
                                alt="Producción sostenible"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left max-w-[300px]">
                                Producción sostenible y consumo responsable
                            </h3>
                            <p>•Gastronomía y salud</p>
                            <p>•Agricultura</p>
                            <p>•Moda y belleza</p>
                            <p>•Acuicultura</p>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[300px]">
                            <Image
                                src={CIUD_SOSTE}
                                alt="Ciudades sostenibles"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left">
                                Ciudades y comunidades sostenibles
                            </h3>
                            <p>•Energía</p>
                            <p>•Residuos Sólidos</p>
                            <p>•Agua y Saneamiento</p>
                            <p>•Construcción </p>
                            <p>•Transporte</p>
                            </div>

                        {/* Tarjeta 4 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[300px]">
                            <Image
                                src={RECURSOS}
                                alt="Recursos naturales"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left">
                                Recursos naturales
                            </h3>
                            <p>•Bosques y flora</p>
                            <p>•Fauna</p>
                            <p>•Gestión del agua y Océanos.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
