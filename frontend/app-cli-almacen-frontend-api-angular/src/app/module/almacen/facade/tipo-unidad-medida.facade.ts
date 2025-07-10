/*
 * @overview        {TipoUnidadMedidaFacade}
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
import { TipoUnidadMedidaViewModel } from '../model/tipo-unidad-medida.model';
import { TipoUnidadMedidaState } from '../state/tipo-unidad-medida.state';
import { TipoUnidadMedidaService } from '../service/tipo-unidad-medida.service';

/**
 * TODO: Description of {@code TipoUnidadMedidaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TipoUnidadMedidaFacade extends GenericFacade<TipoUnidadMedidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TipoUnidadMedidaService,
        entityState: TipoUnidadMedidaState) {
        super(entityService, entityState);
    }

}
