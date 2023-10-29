/*
 * @fileoverview    {TipoListaMaterial}
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
 * TODO: Description of {@code TipoListaMaterial}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"TipoListaMaterial\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TipoListaMaterial implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdTipoListaMaterial;
    @Column(length = 20)
    private String strNombreTipoLista;
    @Column(length = 200)
    private String strDescripcionLista;

}
