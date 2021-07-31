
#Hacer un programa que primero capture cuantas Personas vamos a 
#ingresar, luego pedir su nombre, dni y fecha de nacimiento y al final 
#mostrarlas en un orden de la mas joven a la mas adulta


cantidad_personas = int(input('Ingrese la cantidad de personas: '))

personas = []

for x in range(cantidad_personas):
  print(f'Persona {x+1}')
  personas.append(
    {
      'nombre':input('\tIngrese nombre: '),
      'dni':input('\tIngrese DNI: '),
      'fecha_nacimiento':input('\tIngrese fecha de Nacimiento: ')
    }
  )
  
print(personas)