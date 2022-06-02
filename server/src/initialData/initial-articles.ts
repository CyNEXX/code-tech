const initialArticles  = [
    {
        _id: 1,
        title: "NASA’s James Webb Space Telescope has reached its destination. Now what?",
        shortDescription: "Webb has journeyed a million miles/1.5 million kilometers from Earth to what’s known as the second Lagrange point (L2). This is a very important position in space relative to Earth.",
        longDescription: "",
        photoURL: "../images/james_webb_telescope.jpg",
        detailsURL: 'james_webb_telescope#',
        category: 'news',
        views: 83
    },
    {
        _id: 2,
        title: "Google lucrează la o pereche de ochelari AR cunoscuţi ca 'Project Iris'; Ar putea sosi în 2024 cu CPU custom",
        shortDescription: "În ultimul an a crescut foarte mult cantitatea de scăpări şi zvonuri legate de ochelarii AR şi casca VR de la Apple. Multiple prototipuri au fost testate iar compania din Cupertino, dar şi rivalii săi simt presiunea de a livra un dispozitiv care facilitează accesul la Metaverse. Google are de asemenea un proiect în această zonă, cunoscut ca 'Project Iris' şi detaliat mai jos.",
        longDescription: "",
        photoURL: "../images/google_iris.jpg",
        detailsURL: 'google_iris',
        category: 'news',
        views: 95
    },
    {
        _id: 3,
        title: "Logitech lansează tastatura POP și mouse-ul POP",
        shortDescription: "Logitech lansează tastatura POP si mouse-ul POP, cele mai noi produse Studio Series care vin cu un plus de personalitate și culori vibrante, redefinind felul în care poate arăta spațiul tău de lucru.",
        longDescription: "",
        photoURL: "../images/logitech_pop.jpg",
        detailsURL: 'logitech_pop',
        category: 'news',
        views: 60
    },
    {
        _id: 4,
        title: "De ce Microsoft va plăti 69 miliarde dolari pentru Activision Blizzard - cea mai mare tranzacție din tehnologie?",
        shortDescription: "Strategia Microsoft pe gaming este să crească numărul de oameni care plătesc abonament lunar la serviciul Game Pass comparat cu oficialii Microsoft cu un “Netflix for games” (Netflix pentru jocuri). Serviciul are în prezent aproximativ 25 de milioane de useri.",
        longDescription: "",
        photoURL: "../images/microsoft_activision.jpg",
        detailsURL: 'microsoft_activision',
        category: 'news',
        views: 205
    }, {
        _id: 5,
        title: "Code: toCamelCase(string)",
        shortDescription: "Returns a string representing the passed string converted to camelCase",
        longDescription: "s = original string;\nr = result string;\nw = word;\ni = current index;\n\nFirst we get an array by spliting the string by empty spaces (' '). In the reduce function, we check the current index of the word. If it's the first word, then we want its first character in lowercase (alongside remaining letters from it). Otherwise, we'll buff that first character to upperCase and lower the remaining to lowerCase. The result is added to r.",
        photoURL: "",
        detailsURL: '#',
        category: 'codes',
        code: "const toCamelCase = (s) => s.split(' ').reduce((r, w, i) => r + (i === 0 ? w.charAt(0).toLowerCase() : w.charAt(0).toUpperCase()) + w.substring(1).toLowerCase(), '').trim();",
        views: 200
    },
    {
        _id: 6,
        title: "Code: getNFibonacciNumbers(lengthOfArray)",
        shortDescription: "Returns an array (length = lengthOfArray) of Fibonnaci numbers",
        longDescription: "n = length of the Array containing generated values;\n\nFirst we generate an empty array of n elements (using ...Array(n))), then we grab the keys since it's the data we need and the values are irrelevant anyway. We convert to an array from those keys by surrounding []. In the reduce function, we return an array containing the previous one and concatenating to it the sum of the last two elements from it.",
        photoURL: "",
        detailsURL: '#',
        category: 'codes',
        code: "const getNFibonacciNumbers = (n) => [...Array(n).keys()].reduce((r, c, i) => r.concat([i === 0 ? 0 : i === 1 ? 1 : r[i - 2] + r[i - 1]]), []);",
        views: 210
    }, {
        _id: 7,
        title: "Lorem Ipsum",
        shortDescription: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\nThere is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
        longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        photoURL: "../images/james_webb_telescope.jpg",
        detailsURL: '#',
        category: 'news',
        views: 80
    },

    {
        _id: 8,
        title: "Code: factorialOfN(number)",
        shortDescription: "Returns the product of all positive numbers from 1 to number",
        longDescription: "number = maximum number that will be multiplied\nWe define a recursive function. Via a ternary construct, we define our return points. If all those pass, the function will call itself with the passed parameter - 1 (until it reaches one of those conditions)",
        photoURL: "",
        detailsURL: '#',
        category: 'codes',
        views: 219,
        code: 'const factorialOfN = (number) => (number < 0) ? -1 : (number === 0) ? 1 : number * factorialOfN(number - 1);'
    },
    {
        _id: 9,
        title: "Code: Lorem Ipsum",
        shortDescription: "1914 translation by H. Rackham",
        longDescription: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        photoURL: "",
        detailsURL: '#',
        category: 'codes',
        views: 233,
        code: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        _id: 10,
        title: "Code: Lorem Ipsum",
        shortDescription: "1914 translation by H. Rackham",
        longDescription: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        photoURL: "",
        detailsURL: '#',
        category: 'codes',
        views: 15,
        code: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    }

]

export default initialArticles;