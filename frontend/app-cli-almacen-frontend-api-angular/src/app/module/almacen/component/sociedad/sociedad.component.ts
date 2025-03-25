/*
 * @fileoverview    {SociedadComponent}
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
import { SociedadViewModel } from '../../model/sociedad.model';

/**
 * TODO: Description of {@code SociedadComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-sociedad',
    templateUrl: './sociedad.component.html',
    standalone: false,
    styleUrls: ['./sociedad.component.css']
})
export class SociedadComponent extends GenericComponent<SociedadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SociedadViewModel) {
        super(entityInstance);
    }

}
