

let abierto = null;
let elementoActivo = null;

const textos = {
    mantpc: `
    <div class='detalle'>
        <h3>CORE CLEAN – Servicio Base</h3>
        <p><strong>El tratamiento de realeza que tu computadora merece.</strong></p>
        <p>Tu PC es tu compañera de trabajo. Merece descanso y cuidado profesional. En KiraTech Spa le damos el tratamiento completo para que respire como nueva.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Evaluación Inicial:</strong> Diagnosis completa del estado actual de tu equipo</li>
            <li><strong>Limpieza Externa:</strong> Polvo en chasis, puertos y ventilaciones</li>
            <li><strong>Desensamble Profesional:</strong> Apertura cuidadosa sin riesgo</li>
            <li><strong>Limpieza Interna Profunda:</strong> Aire comprimido y limpieza de componentes</li>
            <li><strong>Limpieza de Componentes:</strong> Ventiladores, disipador y radiadores</li>
            <li><strong>Limpieza de Filtros:</strong> Remoción y lavado si aplica</li>
            <li><strong>Revisión de Conexiones:</strong> Cables, puertos y conectores</li>
            <li><strong>Medición de Temperaturas:</strong> Antes y después (con reporte)</li>
            <li><strong>Test de Estabilidad:</strong> Stress test controlado</li>
            <li><strong>Rearmado y Verificación:</strong> Ensamblado con control de calidad</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 2-3 horas | <strong></p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Reducción de temperatura: 15-20°C</li>
            <li>🔊 Ruido: 70-80% más silenciosa</li>
            <li>⚡ Velocidad: Mejora notable en rendimiento</li>
            <li>🛡️ Longevidad: Extiende vida útil 2-3 años</li>
        </ul>
        
        <p><strong>🛡️ Garantía: 30 días | Incluye Reporte Técnico</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu PC sale como nueva, reluciente y lista para trabajar contigo. Reserva por WhatsApp o inbox — cupos limitados.</p>

        <p style="margin:12px 0; color:#fff7; font-size:0.95em;"><strong>Caso real (ejemplo documentado):</strong> En una Asus TUF A15 (Ryzen 7) realizamos limpieza completa, limpieza del disipador, y aplicación de Arctic MX‑4; con pruebas antes/después en stress test el CPU mostró una reducción de ~32°C y la GPU ~16°C. Los resultados varían según el estado del equipo y las condiciones de uso.</p>
    </div>
    `,

    pasta: `
    <div class='detalle'>
        <h3>❄️ THERMAL BOOST – Enfriamiento MX</h3>
        <p><strong>Bajar temperaturas es un arte. Nosotros nos encargamos.</strong></p>
        <p>La pasta térmica se degrada con el tiempo. La cambiamos con técnica profesional y materiales de primera para reducir temperaturas y evitar throttling.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Evaluación Térmica:</strong> Medición de temperaturas actuales</li>
            <li><strong>Retiro del Disipador:</strong> Con cuidado extremo (sin dañar componentes)</li>
            <li><strong>Limpieza Profunda:</strong> Remoción total de pasta vieja</li>
            <li><strong>Limpieza de CPU/GPU:</strong> Preparación perfecta con isopropanol</li>
            <li><strong>Aplicación Profesional:</strong> Técnica del "pea method" (colocación exacta)</li>
            <li><strong>Reinsertado del Disipador:</strong> Torque exacto, sin sobre-presión</li>
            <li><strong>Test Inmediato:</strong> Verificación en tiempo real</li>
            <li><strong>Monitoreo 30 min:</strong> Estabilización térmica completa</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 45 minutos - 1 hora | <strong>💰 Precio:</strong> MX$400 - MX$650</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Reducción: 10-15°C inmediato</li>
            <li>⚡ Mejor performance en gaming/render</li>
            <li>🔧 Evita throttling automático</li>
            <li>📈 Extiende vida del hardware 3-5 años</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🏆 MARCAS PREMIUM USADAS:</strong> Arctic MX-4 | Arctic MX-6 | Thermal Grizzly Kryonaut (según disponibilidad)</p>
        <p><strong>🛡️ Garantía: 6 meses | Incluye Reporte Térmico Certificado</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Perfecta para gamers exigentes, streamers y profesionales que necesitan máximo rendimiento. Reserva por inbox/WhatsApp.</p>
    </div>
    `,

    optimizacion: `
    <div class='detalle'>
        <h3>SYSTEM BOOST – Modo Bestia (SSD, salud de disco y recomendaciones)</h3>
        <p><strong>Determinamos qué está afectando el rendimiento real de tu equipo y proponemos mejoras concretas.</strong></p>
        <p>Este servicio está pensado para diagnosticar discos (HDD/SSD), evaluar salud del SSD, tiempos de arranque, y proponer acciones: clonación a SSD, optimización de almacenamiento, o recomendaciones de componentes.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ INCLUYE EL DIAGNÓSTICO:</p>
        <ul>
            <li><strong>Salud del disco:</strong> SMART, lectura/escritura, sectores defectuosos</li>
            <li><strong>Velocidad de arranque:</strong> Medición antes/después</li>
            <li><strong>Clonación opcional:</strong> Si conviene migrar a SSD</li>
            <li><strong>Recomendación de mejoras:</strong> ajustes de sistema,SSD, RAM, tarjeta grafica, procesador</li>
            <li><strong>Reporte técnico:</strong> Resultados y pasos recomendados por escrito</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo aproximado:</strong> 45 min - 1.5 horas | <strong>💰 Precio diagnóstico:</strong> MX$350 - MX$900 (según alcance)</p>
        <p style="margin:15px 0;"><strong>📌 TIENDA (KiraTesh Store):</strong> Ofreceremos componentes y SSD recomendados en nuestra tienda (KiraTesh Store) próximamente.</p>
        <p style="color:#d0d0ff; font-size:0.95em;">Servicio ideal si sospechas que tu disco está lento, falla o quieres migrar a SSD con seguridad. Incluye reporte y opción de cotización.</p>
    </div>
    `,

    ssd: `
    <div class='detalle'>
        <h3>SSD OVERDRIVE – Turbo MX</h3>
        <p><strong>De 2 minutos de espera a 15 segundos. La diferencia más notoria que verás en tu PC.</strong></p>
        <p>El SSD es la mejora más impactante. Todo cambia. Todo es más rápido. Todo fluye.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Consultoría:</strong> Asesoramos qué SSD es mejor para ti</li>
            <li><strong>Verificación de Compatibilidad:</strong> Revisamos tu motherboard</li>
            <li><strong>Instalación Física:</strong> Montaje seguro del SSD (M.2 o SATA)</li>
            <li><strong>Clonación de Windows (OPCIONAL):</strong> Transferimos tu sistema actual</li>
            <li><strong>Instalación de Windows Fresh (ALTERNATIVA):</strong> Windows limpio desde 0</li>
            <li><strong>Configuración de Particiones:</strong> Distribución óptima de espacio</li>
            <li><strong>Test de Velocidad:</strong> Lectura/escritura medida en tiempo real</li>
            <li><strong>Migración de Datos (OPCIONAL):</strong> Transfieren carpetas importantes</li>
            <li><strong>Optimización Final:</strong> Ajustes de BIOS para máximo rendimiento</li>
            <li><strong>Stress Test:</strong> Verificación de estabilidad completa</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 1 - 2 horas | <strong>💰 Precio Servicio:</strong> MX$400 - MX$600 (SSD no incluido)</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>⚡ Boot (arranque): De 120s a 15-20s</li>
            <li>📁 Apertura de archivos: Instantáneo</li>
            <li>🎮 Carga de juegos: 50-70% más rápido</li>
            <li>🔧 Transferencia de datos: 10x más veloz que HDD</li>
            <li>💾 Durabilidad: El HDD se va, el SSD durará años</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>💾 SSD RECOMENDADOS:</strong> Samsung 990 Pro | WD Black | Kingston Fury Beast | Seagate FireCuda</p>
        <p style="margin:15px 0;"><strong>📌 OPCIONES POPULARES:</strong></p>
        <ul>
            <li>💰 Budget: SSD 256GB (aprox. MX$540 - MX$900) + Instalación</li>
            <li>⭐ Recomendado: SSD 500GB (aprox. MX$900 - MX$1,440) + Instalación</li>
            <li>👑 Premium: SSD 1TB (aprox. MX$1,440 - MX$2,160) + Instalación</li>
        </ul>
        <p><strong>🛡️ Garantía: Hardware según fabricante + 30 días servicio | Incluye Reporte Técnico</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">La mejora MÁS importante que puedes hacer a una PC vieja. Cambia completamente la experiencia.</p>
    </div>
    `,

    ps4: `
    <div class='detalle'>
        <h3>PS4 SILENT MODE – Anti Turbina</h3>
        <p><strong>Tu PS4 suena como jet. Hora de que descanse como reina.</strong></p>
        <p>La PS4 es guerrera. Juega horas. Se calienta. Acumula polvo. Necesita spa. Nosotros la cuidamos.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            
            <li><strong>Desensamble Seguro:</strong> Apertura profesional sin dañar nada</li>
            <li><strong>Limpieza Externa:</strong> Carcasa y puertos</li>
            <li><strong>Limpieza Interna Profunda:</strong> Ventiladores, radiadores, disipador</li>
            <li><strong>Limpieza del Ventilador Axial:</strong> El culpable del ruido (limpieza a fondo)</li>
            <li><strong>Limpieza de Filtros de Polvo:</strong> Remoción y limpieza completa</li>
            <li><strong>Cambio de Pasta Térmica (OPCIONAL):</strong> Si es muy vieja (-10°C más)</li>
            <li><strong>Revisión de Pads Térmicos:</strong> Reemplazo si están degradados</li>
            <li><strong>Rearmado Profesional:</strong> Todo vuelve perfectamente ensamblado</li>
            <li><strong>Test en Juego Exigente:</strong> Verificación de temperatura y ruido real</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 2 - 2.5 horas | <strong>💰 Precio:</strong> MX$1,400 - MX$2,000</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🔊 Ruido: De jet a susurro (80% reducción)</li>
            <li>🌡️ Temperatura: Baja 10-15°C</li>
            <li>⚡ Rendimiento: 0 throttling (máximo FPS siempre)</li>
            <li>🎮 Experiencia: Juegos sin interrupciones</li>
            <li>📈 Longevidad: Extiende vida útil 2-3 años</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🛠️ SERVICIO COMPLETO O PARCIAL:</strong></p>
        <ul>
            <li>Solo Limpieza: MX$1,150 (ruido -60%, temp -8°C)</li>
            <li>Limpieza + Pasta: MX$1,650 (ruido -80%, temp -15°C)</li>
            <li>Limpieza + Pasta + Pads: MX$2,000 (MÁXIMO rendimiento)</li>
        </ul>
        <p><strong>🛡️ Garantía: 60 días | Incluye Reporte Térmico Certificado</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Recomendado si tu PS4 suena como turbina después de 4+ años de uso intenso.</p>
    </div>
    `,

    /* PS5 removed */

    xbox: `
    <div class='detalle'>
        <h3>XBOX ICE BOOST – Estabilidad Pro</h3>
        <p><strong>La Xbox más potente del mundo merece el mejor cuidado del mundo.</strong></p>
        <p>Xbox Series X es una potencia. Exige cuidados especiales. Nosotros sabemos cómo mantenerla en su prime.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Evaluación Inicial:</strong> Estado actual (temperatura, ruido, rendimiento)</li>
            <li><strong>Desensamble Profesional:</strong> Apertura sin riesgo de daño</li>
            <li><strong>Inspección Visual:</strong> Búsqueda de polvo acumulado, corrosión</li>
            <li><strong>Limpieza Interna Profunda:</strong> Aire comprimido en circuitos, radiadores</li>
            <li><strong>Limpieza del Ventilador:</strong> Responsable del 90% del ruido</li>
            <li><strong>Limpieza de Disipador y Radiador:</strong> Máximo flujo de aire</li>
            <li><strong>Limpieza de Filtros:</strong> Reemplazo si están muy dañados</li>
            <li><strong>Cambio de Pasta Térmica (OPCIONAL):</strong></li>
            <li><strong>Revisión de Conexiones:</strong> HDMI, USB, puertos de expansión</li>
            <li><strong>Rearmado Perfecto:</strong> Sin sonidos extraños</li>
            <li><strong>Test en Juegos Exigentes:</strong> Forza Motorsport 5, Starfield en Ultra</li>
            <li><strong>Calibración de Fans:</strong> Balance entre ruido y temperatura</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 2 - 2.5 horas | <strong>💰 Precio:</strong> MX$1,400 - MX$2,000</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🔊 Ruido: Casi silenciosa (especialmente Series X)</li>
            <li>🌡️ Temperatura: Óptima (50-60°C en gaming)</li>
            <li>⚡ Rendimiento: 4K/120fps sin throttling</li>
            <li>🎮 Experiencia: Gaming premium sin interrupciones</li>
            <li>📈 Longevidad: Asegura 5+ años sin problemas</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>📌 POR MODELO:</strong></p>
        <ul>
            <li><strong>Xbox One:</strong> Limpieza + optimización (MX$1,400)</li>
            <li><strong>Xbox Series S:</strong> Servicio estándar (MX$1,700)</li>
            <li><strong>Xbox Series X:</strong> Con pasta térmica premium (MX$2,000)</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🎯 ESPECIALMENTE RECOMENDADO PARA:</strong> Gamers competitivos, streamers, usuarios intensivos (8+ horas/día)</p>
        <p><strong>🛡️ Garantía: 60 días | Incluye Reporte Técnico + Fotos Before/After</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu Xbox durará más años, funcionará silenciosa y dará máximo rendimiento siempre.</p>
    </div>
    `,

    switch: `
    <div class='detalle'>
        <h3>SWITCH COOL FIX – Control Térmico</h3>
        <p><strong>La Switch más amada merece el mejor cuidado. Portátil, potente, ¡y merecidamente delicada!</strong></p>
        <p>Switch es diferente. Portátil. Compleja. Pequeñita pero potente. Necesita manos expertas.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Diagnosis Inicial:</strong> Chequeo de temperatura, batería, ventilación</li>
            <li><strong>Desensamble Experto:</strong> Switch es frágil. Cuidado extremo</li>
            <li><strong>Limpieza Externa:</strong> Carcasa, botones, ventilaciones</li>
            <li><strong>Limpieza Interna Profunda:</strong> Circuitos, ventiladores, radiador</li>
            <li><strong>Limpieza del Ventilador:</strong> Micro-ventilador (muy frágil, requiere precisión)</li>
            <li><strong>Limpieza de Disipador y Heatsinks:</strong> Esencial para portátiles</li>
            <li><strong>Limpieza de Conectores Joy-Con:</strong> Común problema de desconexión</li>
            <li><strong>Limpieza de Puerto USB-C:</strong> A menudo acumula pelusa</li>
            <li><strong>Revisión de Batería:</strong> Capacidad y salud actual</li>
            <li><strong>Cambio de Pasta Térmica (OPCIONAL):</strong> Si es muy vieja</li>
            <li><strong>Limpieza de Pantalla:</strong> Sin rayones, sin manchas</li>
            <li><strong>Test de Rendimiento:</strong> Juego exigente (Zelda BotW, Doom, Fortnite)</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 1.5 - 2 horas | <strong>💰 Precio:</strong> MX$1,150 - MX$1,650</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Temperatura: Baja 8-12°C (máximo gaming)</li>
            <li>🔊 Ruido: Ventilador menos audible (40% reducción)</li>
            <li>🎮 Rendimiento: 60 FPS estables sin throttling</li>
            <li>⚡ Batería: Mejor duración (menos calor = menos consumo)</li>
            <li>🎮 Joy-Con: Conexión más estable</li>
            <li>📈 Longevidad: +2 años de vida útil</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🔋 NOTA SOBRE BATERÍA:</strong></p>
        <ul>
            <li>Si tienes 3+ años, probablemente necesite reemplazo</li>
            <li>Costo adicional: MX$640 - MX$900 (batería original aprox.)</li>
            <li>Pero vale la pena: Switch nuevamente durará 5+ horas</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🎯 ESPECIALMENTE RECOMENDADO PARA:</strong> Gamers portátiles, padres con Switch usada, coleccionistas, streamers portátiles</p>
        <p><strong>🛡️ Garantía: 45 días | Incluye Reporte Técnico + Limpieza de Pantalla</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu Switch volverá a funcionar como el día que la desempaques. Portátil, fresca, y lista para aventuras.</p>
    </div>
    `,
};

function mostrarDetalle(el, tipo){
    console.log('mostrarDetalle llamado con:', tipo);
    
    // Verificar que el texto existe
    if (!textos[tipo]) {
        console.error(`No existe el servicio: ${tipo}`);
        return;
    }
    
    // Verificar si ya existe un detalle abierto dentro de este elemento (direct child)
    let detalleExistente = null;
    for (let node of el.childNodes) {
        if (node.nodeType === 1 && node.classList && node.classList.contains('detalle')){
            detalleExistente = node;
            break;
        }
    }
    if (detalleExistente) {
        // Si ya está abierto dentro del item, cerrarlo
        console.log('Cerrando detalle existente dentro del item');
        detalleExistente.style.display = 'none';
        detalleExistente.remove();
        el.classList.remove('activo');
        elementoActivo = null;
        abierto = null;
        return;
    }
    
    // Cerrar detalle anterior si existe
    if (abierto) {
        console.log('Removiendo detalle anterior');
        abierto.remove();
    }
    
    // Remover clase activo del elemento anterior
    if (elementoActivo && elementoActivo !== el) {
        elementoActivo.classList.remove('activo');
    }
    
    // Crear nuevo detalle
    console.log('Creando nuevo detalle para:', tipo);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = textos[tipo];
    
    // Buscar el primer elemento (no nodo de texto)
    let detalleDiv = null;
    for (let node of wrapper.childNodes) {
        if (node.nodeType === 1) { // ELEMENT_NODE
            detalleDiv = node;
            break;
        }
    }
    
    // Verificar que encontramos el elemento
    if (!detalleDiv) {
        console.error('No se pudo encontrar el elemento detalle en el HTML');
        return;
    }
    
    // Asegurar que tiene la clase detalle
    detalleDiv.classList.add('detalle');
    detalleDiv.classList.add('mostrar');
    
    // Insertar DENTRO del item, al final, para que el detalle quede en su propio cuadro
    try {
        el.appendChild(detalleDiv);
    } catch (err) {
        console.error('No se pudo insertar detalle dentro del item, intentando como sibling:', err);
        if (el.parentNode) {
            el.parentNode.insertBefore(detalleDiv, el.nextSibling);
        } else {
            console.error('El elemento no tiene parentNode');
            return;
        }
    }
    
    // Actualizar variables globales
    abierto = detalleDiv;
    elementoActivo = el;
    el.classList.add('activo');
    
    console.log('Detalle insertado, scrolling...');
    
    // Scroll suave hacia el detalle
    setTimeout(() => {
        if (detalleDiv && detalleDiv.scrollIntoView) {
            detalleDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

/* -------- Sparkles background (static, no scroll reaction) -------- */
function initSparkles(options = {}){
    const count = options.count || 20;

    // create sparkles positioned across the viewport
    for (let i = 0; i < count; i++){
        const s = document.createElement('div');
        s.className = 'sparkle';
        // random size class
        const sz = Math.random();
        if (sz < 0.45) s.classList.add('small');
        else if (sz < 0.85) s.classList.add('medium');
        else s.classList.add('large');

        // random position
        const left = Math.random() * 100; // vw
        const top = Math.random() * 100; // vh
        s.style.left = left + 'vw';
        s.style.top = top + 'vh';

        // random animation delay so they don't sync visually
        s.style.animationDelay = (Math.random() * 4) + 's';

        // set a gentle, constant opacity (static background)
        s.style.opacity = 0.28 + Math.random() * 0.18;

        document.body.appendChild(s);
    }

    // mark body with static sparkle class for CSS tuning
    document.body.classList.add('sparkle-static');
}

// Initialize sparkles once DOM is ready
if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=> initSparkles({count:22}));
} else {
    initSparkles({count:22});
}


