/*
 * @fileoverview    {Remisiones} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code Remisiones}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Remisiones\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Remisiones implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdRemision;
    @Column(length = 255)
    private String strNumeroGuia;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaCreacion;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaRecepcion;
    private Integer intConcecutivoInterno;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdAgenteDestino", referencedColumnName = "intIdAgente")
    private Long intIdAgenteDestino;
    @JoinColumn(name = "intIdAgenteOrigen", referencedColumnName = "intIdAgente")
    private Long intIdAgenteOrigen;
    @JoinColumn(name = "intIdEstadoRemision", referencedColumnName = "intIdEstadoRemision")
    private Long intIdEstadoRemision;

}
