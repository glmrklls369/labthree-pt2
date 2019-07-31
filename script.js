class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = ;
        this.relation = relation;}
    }
class AddressBook {
    constructor(){
        this.contacts =[]
    } 

    addContact(name, email, phone, relation){
        this.contacts.push(new Contact(name, email, phone, relation));
    }
    delete(index){
            this.contacts.splice(index,1);        }
    }
    display(){
        document.querySelector("#contactList").innerHTML="";
        this.contacts.forEach((contact, index)=>{
            const newEntry = document.createElement("div");
            newEntry.classList.add("contact_box");
            newEntry.innerHTML = `
            <p>Name: ${contact.name}</p>
            <p>Email:${contact.email}</p>
            <p>Phone:${contact.phone}</p>
            <p>Relation:${contact.relation}</p>
            <i class="fa fa-trash" index="${index}" aria-hidden="true"></i>`;
            document.querySelector("#contactList").append(newEntry);
        });
        
    }


const addressBook = new AddressBook();
addressBook.addContact("Veronica", "@gmail", "248", "self");
addressBook.addContact("Eric", "@yahoo", "248", "brother");
addressBook.display();

const form = document.querySelector("form");
function submitListener(){
    form.addEventListener("submit", addContact);
}


