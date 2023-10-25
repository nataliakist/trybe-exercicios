from stack import Stack


def garage_parking():
    garage = Stack()
    option = 0

    while option != 4:
        print("1. Add car")
        print("2. Remove car")
        print("3. Show cars")
        print("4. Close program")
        option = int(input("Choose an option: "))

        if option == 1:
            plate_number = input("Enter the plate number: ")
            garage.push(plate_number)
            print(f"Car with plate number {plate_number} parked")

        elif option == 2:
            plate_number = input("Enter the plate number: ")
            street = Stack()
            removed = False

            while not garage.is_empty() or not removed:
                last_parked_plate = garage.pop()
                if last_parked_plate == plate_number:
                    print(f"Car with plate number {plate_number} removed")
                    removed = True
                else:
                    street.push(last_parked_plate)

            while not street.is_empty():
                garage.push(street.pop())

            if not removed:
                print(f"Car with plate number {plate_number} not found")

        elif option == 3:
            print(f"Parked vehicles: {garage}")

        else:
            print("Finishing the program...")
            break
        

if __name__ == "__main__":
  garage_parking()