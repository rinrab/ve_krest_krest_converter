var examples = [
`#include <iostream>

// пишем первую программу на В††
// пишем "Славься русь!"

using namespace std;

int main()
{
    for (int i = 0; i < 10; i++){
        std::string строченька = "Славься русь!";
        cout << строченька << " " << i << endl;
    }

    return 0;
}`,

///////////////////////////////////////////////////////

`#include <iostream>

using namespace std;

enum времена_года {
    Зимъ , Осѧнь , Лѣто , Весна
};

int main() {
    времена_года текущее_время = Лѣто;
    switch (текущее_время)
    {
        case Зимъ :
        cout << "Ныне зима. Время для кваса и запасов воды Байкальской." << endl;
        break;

        case Весна :
        cout << "Ныне весна. Время для кваса и ожидания весеннего потока воды Байкальской." << endl;
        break;

        case Лѣто :
        cout << "Ныне лето. Время для наслаждения квасом и летних купаний в Байкале." << endl;
        break;

    default:
        cout << "Ныне осень. Время для запасов и готовности к холодам." << endl;
    }

    return 0;
}`,

//////////////////////////////////////////////////////

`#include <iostream>

// считаем убитых ящеров

int main()
{
    int всегоубитыхЯщеров = 0;
    
    while (true) {
        std::cout << "Сколько ящеров вы убили: ";
        
        int убитыхЯщеров;
        std::cin >> убитыхЯщеров;
        
        if (убитыхЯщеров <= 2) {
            break; // плохой, не соблюдает порядки
        } else {
            всегоубитыхЯщеров += убитыхЯщеров;
        
            std::cout << std::endl << "Вы убили " << всегоубитыхЯщеров << " ящеров." << std::endl;
        }
    }
    
    std::cout << "Недоздача, каждый Русс должен убивать от 2 ящеров в день." << std::endl;
}`,

////////////////////////////////////////////////////////

`#include <iostream>

using namespace std;

template <typename Т>
void пузырь(Т* полк, int поголовье)
{
    for(size_t локоть = 0; локоть < поголовье; ++локоть)
        for(size_t аршин = локоть; аршин < поголовье; ++аршин)
            if(полк[локоть] > полк[аршин])
                std::swap(полк[локоть], полк[аршин]);
}

int main()
{
    cout << "Начало работы" << endl;
    int размер = 100000;
    // царь выделил место for заселения
    int* деревня = new int[размер]; 
    // деревня заселилась
    for(int пуд = размер - 1; пуд >= 0; --пуд)
         деревня[пуд] = пуд + 1;
    // в деревне установлен порядок
    пузырь(деревня, размер);
    cout << "Русов не опередите, змеи окоянные";
    // холопы выселены за содействие рептилиям
    delete деревня;
    return 0;
}`,
]