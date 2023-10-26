/*
 * @fileoverview    {CentrosTrabajos}
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
 * TODO: Definición de {@code CentrosTrabajos}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"CentrosTrabajos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CentrosTrabajos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdCentroDeTrabajo;
    private Long intIdInterlocutorComercial;
    private Long intIdCategoriaCentro;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCosto;
    private Long intIdBodega;
    private Long intIdMetodoCosteo;

}
