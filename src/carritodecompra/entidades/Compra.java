/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package carritodecompra.entidades;

/**
 *
 * @author joseluiscasadovalero
 */
public class Compra {
    
    private ICalculoCoste producto;
    private double cantidad;

    public Compra() {
    }
    
    public Compra(ICalculoCoste producto, double cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    public double getCoste() {
        double precio = getProducto().getCoste(cantidad);
        return precio;
    }
    
    
    /**
     * @return the producto
     */
    public ICalculoCoste getProducto() {
        return producto;
    }

    /**
     * @param producto the producto to set
     */
    public void setProducto(ICalculoCoste producto) {
        this.producto = producto;
    }

    /**
     * @return the cantidad
     */
    public double getCantidad() {
        return cantidad;
    }

    /**
     * @param cantidad the cantidad to set
     */
    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }
    
    
    
    
}
