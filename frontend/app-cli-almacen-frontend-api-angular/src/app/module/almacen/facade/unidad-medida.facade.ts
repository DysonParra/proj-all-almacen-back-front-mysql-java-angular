/*
 * @overview        {UnidadMedidaFacade}
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
import { UnidadMedidaViewModel } from '../model/unidad-medida.model';
import { UnidadMedidaState } from '../state/unidad-medida.state';
import { UnidadMedidaService } from '../service/unidad-medida.service';

/**
 * TODO: Description of {@code UnidadMedidaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class UnidadMedidaFacade extends GenericFacade<UnidadMedidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: UnidadMedidaService,
        entityState: UnidadMedidaState) {
        super(entityService, entityState);
    }

}
