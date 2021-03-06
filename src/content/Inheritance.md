---
title: Inheritance in JavaScript
author: MSP
date: July 14, 2022
---

## What is **`Inheritance`**?

`In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class, retaining similar implementation` . Also defined as deriving new classes (sub classes) from existing ones such as super class or base class and then forming them into a hierarchy of classes.

 In most class-based object-oriented languages, an object created through inheritance, a `child object` , acquires all the properties and behaviors of the `parent object` , with the exception of constructors, destructor, overloaded operators and friend functions of the base class.
 
 Inheritance allows programmers to create classes that are built upon existing classes, to specify a new implementation while maintaining the same behaviors, to reuse code and to independently extend original software via public classes and interfaces.

 ## What is *`class`*?
A *`class`* is a definition for an *`object`*. All objects are created from classes and can't exist without them. A class holds information or details about an object. In `object oriented programming` classes are used like a **blueprint** or **template** to create new objects from.

## What is *`object`*

In object oriented programming we combine a group of related variables and functions into a unit, we call that unit an **`object`**. We refer to these variables as properties and functions as methods.

**In JavaScript, inheritance is supported by using prototype object. Some people call it** ***`Prototypal Inheritance`*** **and some call it** ***`Behaviour of Delegation`***

## Difference between Class and Prototypal Inheritance

**Class Inheritannce:** ***A class is like a blueprint--a description of the object to be created.*** Classes inherit from classes and *create subclass relationships:*hierarchical class taxonomies(classification).

Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6. Classes as you may know them from languages like Java don???t technically exist in JavaScript. Constructor functions are used, instead. The ES6 `class` keyword desugars to a constructor function:
```bash
class Foo {}
typeof Foo // 'function'
```
In JavaScript, class inheritance is implemented on top of prototypal inheritance, but that does not mean that it does the same thing:
JavaScript???s class inheritance uses the prototype chain to wire the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. Those steps form **single-ancestor parent/child hierarchies and create the tightest coupling available in OO design.**

**Prototypal Inheritance:** ***A prototype is a working object instance.*** Objects inherit directly from other objects.

Instances may be composed from many different source objects, allowing for easy selective inheritance and a flat [Prototype] delegation hierarchy. In other words, class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction.
Instances are typically instantiated via factory functions, object literals, or *`Object.create()`*.

*`Inheritance is fundamentally a code reuse mechanism: A way for different kinds of objects to share code. The way that you share code matters because if you get it wrong, it can create a lot of problems.`*

**Class inheritance creates parent/child object taxonomies as a side-effect.**

Those taxonomies are virtually impossible to get right for all new use cases, and widespread use of a base class leads to the fragile base class problem, which makes them difficult to fix when you get them wrong. In fact, class inheritance causes many well known problems in OO design:
1. **The tight coupling problem-** (class inheritance is the tightest coupling available in oo design) Tight coupling in general is when two things depends on one another, that is, changing one may have impact on another., which leads to the next one???
2. ***The fragile base class problem-**The fragile base class problem is a fundamental architectural problem of object-oriented programming systems where base classes (superclasses) are considered "fragile" because seemingly safe modifications to a base class, when inherited by the derived classes, may cause the derived classes to malfunction.
3. **Inflexible hierarchy problem** (eventually, all evolving hierarchies are wrong for new uses)
4. **The duplication by necessity problem** (due to inflexible hierarchies, new use cases are often shoe-horned in by duplicating, rather than adapting existing code)
5. **The Gorilla/banana problem** (What you wanted was a banana, but what you got was a gorilla holding the banana, and the entire jungle)