@PayWithAplazame
Feature: Completar el pago con Aplazame con distintos resultados

  Background: Decido pagar con aplazame sin asegurar el pago
    Given Accedo a la pantalla del carrito de compra
    And Compruebo que el carrito de compra tiene un total de "130,14€"
    And Decido pagar con Aplazame
    And Autorizo a ceder mis datos personales
    And Continuo sin asegurar el pago

  @OK
  Scenario: Realizar el proceso completo con resultado ok
    When Introduzco el dni con número "11111111 H" y fecha de nacimiento "11 11 1990"
    And Acepto las condiciones de uso
    And Continuo la operativa
    And Cumplimento los datos de la tarjeta con
       | cuenta	    | 4111 1111 1111 1111|
       | caducidad	| 1125	|
       | cvv	    | 123			|
    And Continuo la operativa
    And Introduzco la clave del sms
    Then Compruebo que el resultado es OK

  @KO
  Scenario: Realizar el proceso completo con resultado ko
    When Introduzco el dni con número "99999998 T" y fecha de nacimiento "11 11 1990"
    And Acepto las condiciones de uso
    And Continuo la operativa
    And Cumplimento los datos de la tarjeta con
       | cuenta	    | 4111 1111 1111 1111|
       | caducidad	| 1125	|
       | cvv	    | 123			|
    And Continuo la operativa
    Then Compruebo que el resultado es KO

  @Pending
  Scenario: Realizar el proceso completo con resultado pending
    When Introduzco el dni con número "99999995 C"
    And Acepto las condiciones de uso
    And Continuo la operativa
    And Compruebo que aparecen todas mis tarjetas
    And Continuo la operativa
    And Introduzco la clave del sms
    And Elijo la opción de verificar la identidad más adelante
    Then Compruebo que el resultado es Pending
