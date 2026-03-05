# 🥗 Plan Nutricional Adriana
### Aplicación web de nutrición personalizada · Estrategia Mitocondrial · Cali, Colombia

![HTML](https://img.shields.io/badge/HTML-Single%20File-green?style=flat-square&logo=html5)
![Sin dependencias](https://img.shields.io/badge/Dependencias-Ninguna-brightgreen?style=flat-square)
![Funciona offline](https://img.shields.io/badge/Offline-100%25-blue?style=flat-square)
![Móvil](https://img.shields.io/badge/Responsive-Sí-orange?style=flat-square)

---

## ¿Qué es esto?

Una **aplicación web de una sola página** (HTML puro, sin frameworks ni dependencias) que centraliza un plan nutricional completo diseñado para pérdida de peso con enfoque mitocondrial, adaptado para hígado graso y gastritis.

Pensada para ser práctica en el día a día: abre en el celular, elige el día, consulta la receta, marca lo que ya compraste.

---

## ✨ Funcionalidades

| Sección | Descripción |
|---|---|
| 📅 **Menú del día** | 7 días con menús distintos. Detecta automáticamente el día actual |
| ⚡ **Alternativas Mito** | Cada comida principal tiene una alternativa mitocondrial expandible |
| 📖 **Recetas completas** | 30 recetas con ingredientes, pasos, alertas y notas. Se abren en modal |
| 🛒 **Lista de compras** | Vista por día o semana completa. Casillas para marcar lo que ya tienes |
| 📊 **Seguimiento** | Tabla de 16 semanas. Registra peso, cintura, ejercicio, agua y estado |
| 📋 **Mi Plan** | Perfil, fases del plan, hábitos mitocondriales, rutina de ejercicio |

---

## 🧬 Enfoque mitocondrial

El plan está estructurado alrededor de los **4 interruptores maestros mitocondriales**:

- ⚡ **AMPK** → Ayuno nocturno · Té verde (EGCG) · Caminata con intervalos · Ajo crudo
- 🧬 **PGC-1α** → Ejercicio físico · Brócoli al vapor (sulforafano) · Ducha fría
- 🍇 **SIRT1** → Uvas negras (resveratrol) · Ayuno · Batido antioxidante
- 🌿 **NRF2** → Cúrcuma (curcumina) · Sulforafano · Polifenoles del café

---

## 🚀 Cómo usar

**Opción 1 — GitHub Pages (recomendado)**

Si activaste GitHub Pages, la app ya está disponible en:
```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

**Opción 2 — Local**

1. Clonar o descargar el repositorio
2. Abrir `Plan_Nutricional_Adriana.html` directamente en cualquier navegador
3. No requiere servidor, conexión a internet ni instalación de nada

```bash
git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
cd <nombre-del-repo>
open Plan_Nutricional_Adriana.html   # Mac
start Plan_Nutricional_Adriana.html  # Windows
```

---

## 📁 Estructura del repositorio

```
/
├── Plan_Nutricional_Adriana.html   # App completa (único archivo necesario)
├── README.md                       # Este archivo
└── assets/                         # (opcional) Capturas de pantalla
```

---

## 📊 Contenido del plan

### Perfil
| Dato | Valor |
|---|---|
| Nombre | Adriana |
| Peso inicial | 88 kg |
| Meta | 57–64 kg |
| Calorías/día | 1,400–1,500 kcal |
| Condiciones | Hígado graso · Gastritis |
| Ciudad | Cali, Colombia |

### Las 4 fases
| Fase | Semanas | Enfoque |
|---|---|---|
| 1 · Adaptación | 1–2 | Ajustar alimentación, eliminar ultraprocesados |
| 2 · Activación | 3–6 | Caminata con intervalos, fuerza, ayuno 12–14h |
| 3 · Aceleración | 7–12 | Mayor intensidad, objetivo 1 kg/semana |
| 4 · Consolidación | 13–24 | Mantener hábitos, llegar a la meta |

### Recetas incluidas
- 🍳 **5 desayunos** — avena, huevos al vapor, batido de avena, yogur con fruta, arepa de maíz peto
- 🍽️ **8 almuerzos** — pollo, tilapia, res magra, sardinas, lentejas, sancocho, caldo de res
- 🌙 **5 cenas** — cremas, ensaladas, huevos al horno, sopa proteica
- 🥗 **5 ensaladas** — verde amplia, pollo desmechado, atún, depurativa, mitocondrial ⭐
- 💧 **5 bebidas** — agua de tomate de árbol, guayaba, hierbas, té verde, jengibre
- ⚡ **2 recetas mito** — sopa de verduras mitocondrial, caldo depurativo hepático

---

## 💾 Almacenamiento de datos

El seguimiento semanal (peso, cintura, ejercicio, agua, estado) se guarda en el **localStorage del navegador** — los datos no salen del dispositivo, no hay servidor, no hay cuenta.

> Para transferir datos entre dispositivos: exportar manualmente los registros (funcionalidad futura sugerida).

---

## 🛠️ Tecnología

- **HTML5** puro — sin frameworks, sin npm, sin build steps
- **CSS3** con variables CSS (custom properties)
- **JavaScript vanilla** — sin jQuery ni librerías externas
- **localStorage** para persistencia del seguimiento
- Tamaño total: **~1 archivo · ~900 líneas**

---

## ⚠️ Aviso médico

Este plan es orientativo y fue diseñado con base en un perfil nutricional específico. **No reemplaza la consulta con médico internista, endocrinólogo o nutricionista.** Consultar con un profesional de la salud antes de iniciar cualquier plan de alimentación.

---

## 🔮 Mejoras sugeridas para futuras versiones

- [ ] Exportar/importar datos de seguimiento en JSON
- [ ] Gráfico de peso semanal con Chart.js
- [ ] Modo PWA (Progressive Web App) para instalar en el celular como app nativa
- [ ] Notificaciones de horarios de comida
- [ ] Calculadora automática de lista de compras según días seleccionados
- [ ] Versión del plan para Erick (hombre, 55 años)

---

## 📄 Licencia

Uso personal. Plan nutricional diseñado para uso privado.

---

## 🆕 Versión 2.0 — Changelog

### Nuevas funcionalidades
- **📲 PWA** — La app se puede instalar en el celular como app nativa. Requiere `manifest.json` y `sw.js` en la misma carpeta que el HTML.
- **👨 Perfil de Erick** — Switch en la barra superior para cambiar entre Adriana y Erick. Menús distintos, porciones mayores, sin restricción de gastritis.
- **📈 Gráfico de peso** — Gráfico de línea en la sección de Progreso. Se actualiza al guardar cada semana.
- **🔔 Recordatorios** — Nueva sección de alarmas con notificaciones del navegador para cada comida del día + recordatorio de agua cada 2 horas.

### Estructura de archivos para GitHub Pages (v2)
```
/
├── Plan_Nutricional_v2.html    # App principal v2
├── manifest.json               # Config PWA (necesario para instalar como app)
├── sw.js                       # Service worker (cache offline + notificaciones)
└── README.md
```

> Para que la PWA funcione correctamente, los tres archivos deben estar en la misma carpeta y servirse desde HTTPS (GitHub Pages lo hace automáticamente).
