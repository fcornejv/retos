#Reto 1: Desarrollar un programa de bienvenida
# 1. Ingresar un nombre y su edad.
# 2. Si es menor de edad que indique que dependiendo de la hora (si es mas de las 6pm) debe ir a dormir y si no hacer la tarea.
# 3. Si es mayor de edad que indique que no esta obligado a hacer nada.

#Importar referencia:
import datetime

name = input("Ingrese su nombre: ")
age = int(input("Ingrese su edad: "))

#Establecer condición - Validar edad:
if age < 18:
  if datetime.datetime.now().strftime('%H:%M:%S') > '18:00:00':
    print("¡", name, " Debes ir a dormir")
  else:
    print("¡", name, " Debes hacer la tarea")
else:
  print("Hola, ", name, "Eres mayor de edad")