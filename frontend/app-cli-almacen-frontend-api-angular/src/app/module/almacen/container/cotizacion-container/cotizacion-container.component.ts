/*
 * @overview        {CotizacionContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { CotizacionViewModel } from '../../model/cotizacion.model';
import { CotizacionFacade } from '../../facade/cotizacion.facade';

/**
 * TODO: Description of {@code CotizacionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-cotizacion-container',
    templateUrl: './cotizacion-container.component.html',
    standalone: false,
    styleUrls: ['./cotizacion-container.component.css']
})
export class CotizacionContainerComponent extends GenericContainerComponent<CotizacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CotizacionViewModel,
        entityFacade: CotizacionFacade) {
        super(entityInstance, entityFacade);
    }

}
