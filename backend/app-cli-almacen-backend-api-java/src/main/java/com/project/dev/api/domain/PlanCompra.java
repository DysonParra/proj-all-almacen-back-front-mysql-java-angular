/*
 * @fileoverview    {PlanCompra}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
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
 * TODO: Description of {@code PlanCompra}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"PlanCompra\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class PlanCompra implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdPlanCompra;
    private Long intCodigoMaterial;
    @Basic(optional = false)
    @Column(nullable = false, length = 100)
    private String strDescripcion;
    @Basic(optional = false)
    @Column(nullable = false)
    private double dblCantidad;
    private Integer intIdGrupoProveedor;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaExplosion;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaCreacion;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaModificacion;
    @Column(length = 100)
    private String strUsuario;
    @Column(length = 10)
    private String strEstado;

}
