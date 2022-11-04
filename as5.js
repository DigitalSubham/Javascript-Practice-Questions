// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr

// 2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr
// 3
// where r is the radius
// 3) Cone- Volume= πr
// 2h/3

// where r is the radius and h is the height of the cone.

class cylinder {
    constructor(radius,height, pi = 3.14){
        this.radius = radius;
        this.height = height;
        this.pi = pi;
    }
    getvolume(){
        const vol_cyl = (this.pi*(this.radius**2)*this.height).toFixed(4)
        console.log("Volume of Cylinder = ",vol_cyl)
    }
}

class Sphere{
    constructor(radius, pi = 3.14){
        this.radius = radius;
        this.pi = pi;
    }
    getvolume(){
        const vol_sph = (4/3*this.pi*(this.radius**3)).toFixed(4)
        console.log("Volume of Sphere = ", vol_sph)
    }
}

class Cone{
    constructor(radius,height,pi=3.14){
        this.radius=radius;
        this.height = height;
        this.pi = pi;
    }
    getvolume(){
        const vol_cone = ((this.pi*(this.radius**2)*this.height)/3).toFixed(4)
        console.log("Volume of Cone = ", vol_cone)
    }
}

let obj1 = new cylinder(2,2);
obj1.getvolume();

let obj2 = new Sphere(2);
obj2.getvolume();

let obj3 = new Cone(2,2);
obj3.getvolume();