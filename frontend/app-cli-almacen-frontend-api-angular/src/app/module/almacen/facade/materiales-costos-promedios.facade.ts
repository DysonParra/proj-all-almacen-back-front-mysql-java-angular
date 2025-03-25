/*
 * @fileoverview    {MaterialesCostosPromediosFacade}
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
import { MaterialesCostosPromediosViewModel } from '../model/materiales-costos-promedios.model';
import { MaterialesCostosPromediosState } from '../state/materiales-costos-promedios.state';
import { MaterialesCostosPromediosService } from '../service/materiales-costos-promedios.service';

/**
 * TODO: Description of {@code MaterialesCostosPromediosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialesCostosPromediosFacade extends GenericFacade<MaterialesCostosPromediosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MaterialesCostosPromediosService,
        entityState: MaterialesCostosPromediosState) {
        super(entityService, entityState);
    }

}
