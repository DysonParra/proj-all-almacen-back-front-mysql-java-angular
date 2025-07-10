/*
 * @overview        {MaterialesCaracteristicasFacade}
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
import { MaterialesCaracteristicasViewModel } from '../model/materiales-caracteristicas.model';
import { MaterialesCaracteristicasState } from '../state/materiales-caracteristicas.state';
import { MaterialesCaracteristicasService } from '../service/materiales-caracteristicas.service';

/**
 * TODO: Description of {@code MaterialesCaracteristicasFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialesCaracteristicasFacade extends GenericFacade<MaterialesCaracteristicasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MaterialesCaracteristicasService,
        entityState: MaterialesCaracteristicasState) {
        super(entityService, entityState);
    }

}
