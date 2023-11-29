## Requerimientos

Debe utilizar la última versión de Vue.

Debe utilizar solo composition API (Hooks).

Puede usar Bootstrap como libraría CSS para los estilos o en la que se sienta más cómodo.

- Persistencia: los cards deben ser almacenados en el LocalStorage

- debe simular 5 segundos de carga mientras hace fetching de la lista de las cartas.

- Debe colocar un componente de carga mientras realiza la consulta de los datos, puede usar Skeleton o un Loading tradicional.

- Unit Testing: Debe realizar al menos dos unit test (ej: Creation form and Filters).

El código fuente debe subirlo a un repositorio de Git de su preferencia y enviar el link para su posterior evaluación


## Etapa 1

✅ - Implemente un tablero Kanban con tres columnas, "To Do", "In Progress" y "Done"
✅ - Los formularios para crear tarjetas deben colocarse en un modal. 
✅ - los usuarios pueden agregar tareas (Cards).
✅- Cada tarjeta debe tener los siguientes campos: 
    ✅ - Título 
    ✅ - Descripción 
    ✅ - Etiqueta (SEO, formato largo, publicación de blog, etc.) 
    ✅ - Asignatario 
    ✅ - Fecha de vencimiento
✅ - los usuarios pueden editar tareas (Cards).
✅ - los usuarios pueden eliminar tareas (Cards).
✅ - Cuando un usuario agrega una nueva tarjeta, ésta debe colocarse en la parte inferior de la columna "Tareas pendientes".
✅ - Se debe mostrar un modal de confirmación antes de eliminar una tarjeta.

## Etapa 2

✅ - Implemente la funcionalidad de arrastrar y soltar donde los usuarios deberían poder seleccionar una o varias tarjetas y moverlas de una columna a otra. 
✅ - Al colocar una o más cartas en una columna que contiene otras cartas, las nuevas cartas deben agregarse en la parte inferior, manteniendo el mismo orden que tenían antes. (Puedes usar una biblioteca)

## Etapa 3
- Implemente una búsqueda para filtrar tarjetas según los siguientes campos: 
    - Título
    - Asignatario
    - Etiquetas