/*
 * @fileoverview    {ListasPreciosMateriales}
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
 * TODO: Description of {@code ListasPreciosMateriales}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"ListasPreciosMateriales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ListasPreciosMateriales implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    @Basic(optional = false)
    @Column(nullable = false)
    private long intIdMateriales;
    @Basic(optional = false)
    @Column(nullable = false)
    private long intIdListasPrecios;

}
