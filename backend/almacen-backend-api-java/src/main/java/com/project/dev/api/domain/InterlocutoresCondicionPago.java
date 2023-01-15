/*
 * @fileoverview    {InterlocutoresCondicionPago} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code InterlocutoresCondicionPago}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"InterlocutoresCondicionPago\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutoresCondicionPago implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdInterlocutorCondicionPago;
    @Column(length = 255)
    private String strNombreCondicion;
    @Column(precision = 12, scale = 0)
    private Float fltInteresMora;
    @Column(precision = 12, scale = 0)
    private Float fltDescuentoTotal;
    @Column(precision = 10, scale = 2)
    private BigDecimal decCupoCredito;
    @Column(length = 255)
    private String strNumeroCuenta;
    @Column(length = 255)
    private String strSucursal;
    @Column(length = 255)
    private String strClaveControl;
    private Boolean bitEntregaParcial;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdCondicionPago", referencedColumnName = "intIdCondicionPago")
    private Long intIdCondicionPago;
    @JoinColumn(name = "intIdInterlocutor", referencedColumnName = "intIdInterlocutorComercial")
    private Long intIdInterlocutor;
    @JoinColumn(name = "intIdListaPrecio", referencedColumnName = "intIdListaPrecio")
    private Long intIdListaPrecio;

}
