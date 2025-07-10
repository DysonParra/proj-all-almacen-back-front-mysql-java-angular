/*
 * @overview        {CotizacionFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { CotizacionViewModel } from '../model/cotizacion.model';
import { CotizacionState } from '../state/cotizacion.state';
import { CotizacionService } from '../service/cotizacion.service';

/**
 * TODO: Description of {@code CotizacionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CotizacionFacade extends GenericFacade<CotizacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CotizacionService,
        entityState: CotizacionState) {
        super(entityService, entityState);
    }

}
