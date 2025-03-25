/*
 * @fileoverview    {CotizacionComponent}
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
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { CotizacionViewModel } from '../../model/cotizacion.model';

/**
 * TODO: Description of {@code CotizacionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-cotizacion',
    templateUrl: './cotizacion.component.html',
    standalone: false,
    styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent extends GenericComponent<CotizacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CotizacionViewModel) {
        super(entityInstance);
    }

}
