# 🥗 Plan Nutricional
### Aplicación web de nutrición personalizada · Estrategia Mitocondrial 

![HTML](https://img.shields.io/badge/HTML-Single%20File-green?style=flat-square&logo=html5)
![Sin dependencias](https://img.shields.io/badge/Dependencias-Ninguna-brightgreen?style=flat-square)
![Funciona offline](https://img.shields.io/badge/Offline-100%25-blue?style=flat-square)
![Móvil](https://img.shields.io/badge/Responsive-Sí-orange?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-Instalable-purple?style=flat-square)

---

## ¿Qué es esto?

Una **aplicación web de una sola página** (HTML puro, sin frameworks ni dependencias) que centraliza un plan nutricional completo para 3 perfiles familiares, diseñado con enfoque mitocondrial y adaptado a las condiciones médicas de cada persona. Funciona como app nativa instalada desde Safari en iPhone.

---

## ✨ Funcionalidades

| Sección | Descripción |
|---|---|
| 📅 **Menú semanal** | Generado aleatoriamente desde un pool de comidas por perfil. No repite proteínas consecutivas |
| 🔀 **Rotación semanal** | Botón "Mezclar nueva semana" genera un menú diferente respetando todas las restricciones médicas |
| ⚡ **Alternativas Mito** | Cada comida principal tiene una alternativa mitocondrial expandible |
| 📖 **Recetario completo** | +50 recetas con ingredientes, pasos y notas. Filtrable por categoría |
| ⏱ **Temporizadores** | Detecta tiempos en los pasos de cada receta y genera botones de cronómetro con sonido |
| 🔔 **Alarmas por perfil** | Recordatorios de comida y agua configurables independientemente por perfil |
| 🛒 **Lista de compras** | Generada dinámicamente desde el menú activo. Vista por día o semana completa |
| 📊 **Progreso** | Tabla 16 semanas con peso, cintura, ejercicio, agua y estado. Gráfico de línea |
| ⚡ **Nivel calórico** | Ajuste automático según ritmo de pérdida de peso (Reducido / Base / Aumentado) |
| 🤖 **Thermomix TM6** | Sección completa con recetas adaptadas al TM6 — velocidades y tiempos exactos |
| 📋 **Mi Plan** | Perfil, fases, hábitos mitocondriales y rutina de ejercicio por usuario |
| 🍮 **Postres** | Postres de fin de semana adaptados por perfil médico |

---

## 👥 Perfiles

La app soporta 3 perfiles con menús, restricciones, alarmas y saludos completamente independientes:

| Perfil | Condición | Objetivo | Calorías base |
|---|---|---|---|
| 👩 **Perfil 1** | Hígado graso · Gastritis | Pérdida de peso · Estrategia mitocondrial | 1,400–1,500 kcal/día |
| 👨 **Perfil 2** | Exceso de peso | Pérdida de peso · Salud mitocondrial | 1,800–2,000 kcal/día |
| 👧 **Perfil 3** | Sin condiciones | Bajar % grasa · Ganar masa muscular | 1,600–1,750 kcal/día |

### Selector de perfil
- Al abrir la app por primera vez aparece una pantalla de selección con los 3 avatares
- Cada dispositivo recuerda el último perfil usado
- El header muestra solo el nombre del usuario activo
- El botón ⇄ abre el selector completo para cambiar de perfil

---

## 🧬 Enfoque mitocondrial

El plan activa los **4 interruptores maestros mitocondriales**:

- ⚡ **AMPK** → Ayuno nocturno · Té verde (EGCG) · Caminata con intervalos · Ajo crudo
- 🧬 **PGC-1α** → Ejercicio físico · Brócoli al vapor 5 min exactos (sulforafano) · Ducha fría
- 🍇 **SIRT1** → Uvas negras (resveratrol) · Ayuno · Batido antioxidante
- 🌿 **NRF2** → Cúrcuma (curcumina) · Sulforafano · Polifenoles del café

---

## ⚡ Sistema de nivel calórico automático

Al guardar el peso semanalmente, la app evalúa el ritmo de pérdida y ajusta el menú:

| Ritmo de pérdida | Acción |
|---|---|
| > 1 kg/semana | 🔼 **Aumentado** — protege masa muscular |
| 0.3–1 kg/semana | ✅ **Base** — ritmo óptimo |
| < 0.3 kg/semana | 🔽 **Reducido** — reactiva el progreso |
| Sin pérdida o sube | 🔽 **Reducido** + aviso en pantalla |

También ajustable manualmente tocando el badge de calorías en el menú.

---

## 🤖 Thermomix TM6

Sección dedicada con +25 recetas adaptadas al TM6, organizadas en 7 categorías:

🍳 Desayunos · 🍲 Sopas · 🍗 Proteínas · 🍚 Arroces y legumbres · 💧 Bebidas · ⚡ Extras Mito · 🍮 **Postres**

Cada receta del recetario general que tiene versión TM6 muestra un **banner verde "Ver TM6 →"** que lleva directamente a esa receta en la sección Thermomix.

---

## ⏱ Temporizadores y sonidos

Los pasos de las recetas con tiempos generan automáticamente botones de cronómetro. Al activarlo:
- Widget flotante con cuenta regresiva visible en cualquier sección
- Pasos críticos (brócoli 5 min exactos, Thermomix) resaltados en naranja
- Al finalizar: **sonido + vibración + notificación**

Sonidos implementados con archivos WAV en base64 — compatibles con iOS Safari:
- ⏱ **Timer**: 3 beeps ascendentes
- 🔔 **Alarma comida**: 3 tonos suaves
- 💧 **Agua**: gota descendente

---

## 🍮 Postres de fin de semana

| Perfil | Días | Postres disponibles |
|---|---|---|
| Perfil 1 (gastritis) | Sáb y Dom | Mousse maracuyá, mousse banano, helado banano, galletas avena-coco, ensalada frutas |
| Perfil 2 (hígado graso) | Sáb y Dom | Galletas cacao, fresas con chocolate negro, mousse chocolate-aguacate |
| Perfil 3 (sin restricciones) | **Vie**, Sáb y Dom | Todos los anteriores + versiones con yogur griego |

Todos con versión Thermomix TM6 disponible.

---

## 🚀 Cómo usar

**Instalar como app en iPhone (recomendado)**
1. Abrir la URL de GitHub Pages en **Safari**
2. Tocar compartir → "Añadir a pantalla de inicio"
3. La app se instala con icono propio y funciona offline

```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

**Local**
```bash
git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
open index.html
```

---

## 📁 Estructura del repositorio

```
/
├── index.html        # App completa (~3,300 líneas · todo en un archivo)
├── manifest.json     # Configuración PWA
├── sw.js             # Service Worker (cache offline + actualizaciones automáticas)
└── README.md         # Este archivo
```

---

## 🔄 Actualizaciones automáticas

El `sw.js` usa **network-first** para `index.html`: siempre descarga la versión más reciente al abrir con conexión, sin borrar el caché manualmente.

---

## 📊 Recetas incluidas (+50)

| Categoría | Cantidad |
|---|---|
| 🍳 Desayunos | 8 |
| 🍽️ Almuerzos | 8 |
| 🌙 Cenas | 7 |
| 🥗 Ensaladas | 6 |
| 💧 Bebidas | 6 |
| ⚡ Mitocondriales | 8 |
| 🍮 Postres | 8 |
| 🤖 Thermomix TM6 | +25 |

---

## 💾 Almacenamiento de datos

| Dato | Almacenamiento |
|---|---|
| Progreso semanal (peso, cintura, etc.) | localStorage + Google Sheets (sync en background) |
| Menú semanal generado | localStorage por perfil |
| Perfil activo del dispositivo | localStorage |
| Nivel calórico activo | localStorage por perfil |
| Estado de alarmas | localStorage por perfil |

---

## 🛠️ Tecnología

- **HTML5** puro — sin frameworks, sin npm, sin build steps
- **CSS3** con variables CSS (custom properties)
- **JavaScript vanilla** — sin jQuery ni librerías externas
- **Chart.js** (CDN) para el gráfico de peso
- **HTMLAudioElement** con WAV en base64 para sonidos en iOS
- **localStorage** para persistencia local
- **Google Apps Script** para sincronización en la nube
- **Service Worker** con estrategia network-first

---

## ⚠️ Aviso médico

Este plan es orientativo y fue diseñado con base en perfiles nutricionales específicos. **No reemplaza la consulta con médico, endocrinólogo o nutricionista.**

---

## 📄 Licencia

Uso personal y familiar. Plan nutricional diseñado para uso privado.

---

## 🆕 Historial de versiones

### v3.0 — Versión actual
- 👧 Perfil del perfil activo (bajar grasa + ganar músculo, sin restricciones médicas)
- 🔀 Menú semanal aleatorio con pools de comidas por perfil
- ⚡ Nivel calórico automático según ritmo de pérdida de peso
- ⏱ Temporizadores con sonido integrados en pasos de recetas
- 🔔 Alarmas y sonidos independientes por perfil
- 🍮 Postres de fin de semana adaptados por condición médica
- 🤖 Sección Thermomix TM6 completa con categoría Postres (+7 recetas)
- 🔗 Banner "Ver TM6 →" en todas las recetas con versión disponible
- 💬 Saludos personalizados por perfil y día de la semana
- 🎨 Barra de progreso animada con colores por porcentaje
- 📅 Colores por fase del plan en la tabla de seguimiento
- 🔄 Actualización automática sin borrar caché (network-first sw.js)
- 🔐 Selector de perfil al abrir + memoria por dispositivo
- 📊 Gráfico de peso independiente por perfil
- 🔇 Sonidos WAV en base64 compatibles con iOS Safari

### v2.0
- 👨 Perfil del perfil activo
- 📲 PWA instalable (manifest.json + sw.js)
- 📈 Gráfico de peso con Chart.js
- 🔔 Recordatorios con notificaciones del navegador

### v1.0
- Perfil inicial del perfil activo
- Menú 7 días fijo
- Recetario básico
- Lista de compras
- Seguimiento semanal manual
