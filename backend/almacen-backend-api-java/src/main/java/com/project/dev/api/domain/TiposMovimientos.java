/*
 * @fileoverview    {TiposMovimientos}
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
 * TODO: Definición de {@code TiposMovimientos}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"TiposMovimientos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TiposMovimientos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdTipoMovimiento;
    @Column(length = 255)
    private String strDescripcionTipoMovimiento;
    private Boolean bitSigno;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
