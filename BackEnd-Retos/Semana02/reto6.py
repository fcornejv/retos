from flask import Flask
from flask import request

app = Flask(__name__)

if __name__ == 'main':
    app.run()

@app.route('/ping')
def ping():
    return 'pong'

tareas = {
    '001' : {
        'tarea' : 'presentar retos',
        'prioridad' : 'media'
    },
    '002' : {
        'tarea' : 'dar examen',
        'prioridad' : 'alta'
    },
    '003' : {
        'tarea' : 'actualizar código',
        'prioridad' : 'alta'
    },
    '004' : {
        'tarea' : 'practicar codigo python',
        'prioridad' : 'media'
    },
    '005' : {
        'tarea' : 'ver videos de capacitacion',
        'prioridad' : 'baja'
    }
}

# listar tareas
@app.route('/tareas')
def  listar_tareas():
    return tareas

# agregar nueva tarea
# localhost/agregar_tarea
# {
#     'id' : '004',
#     'tarea' : 'detalle de la tarea',
#     'prioridad' : 'alta',
# }
@app.route('/agregar_tarea',methods=['POST'])
def agregar_tarea():
    data = request.form
    tareas[data['id']] = {
        'tarea' : data['tarea'],
        'prioridad' : data['prioridad']
    }
    return 'OK' , 201

# editar tarea a traves de su id
# localhost/editar_tarea?id=001
# {
#     'tarea' : 'detalle de la tarea',
#     'prioridad' : 'alta',
# }
@app.route('/editar_tarea', methods=['PUT'])
def editar_tarea():
    id = request.args.get('id')
    data = request.form
    tarea_editada = tareas.get(id)
    tarea_editada.update(data)
    tareas[id] = tarea_editada
    return 'OK'

# eliminar una tarea
# localhost/eliminar_tarea?id=001
@app.route('/eliminar_tarea' , methods=['DELETE'])
def eliminar_tarea():
    id = request.args.get('id')
    tareas.pop(id)
    return 'Ok', 204